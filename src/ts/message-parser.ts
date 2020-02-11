import { goog } from 'google-protobuf';
import * as sensorisMessagesImport from '../js/sensoris/protobuf/messages/data_pb';
import * as fs from 'fs';
import requestPromise = require('request-promise-native');

const sensorisMessages = sensorisMessagesImport as any;

export class SrtiEvent {

    _id: string;
    created: Date;
    location: any;
    geometry: any;
    timeStart: Date;
    timeEnd: Date;
    type: string;
    subType: string[];
    numericalValue: number;
    categoricalValue: string;
    valueUom: string;
    protoPayload: string;

}

export class MessageParser {

    private totalFiles = 0;
    private payload = '';
    private chunkSize = 100000;
    private currentChunkCount = 0;
    private chunks = [];
    finishedCallback: any;
    finished: boolean;


    /**
     * 
     * @param esUrl the target Elasticsearch REST API base URL
     * @param created the created date (uses as a metadata field)
     * @param dataFiles the data files to be ingested (can be empty array if parseByteData() is used)
     * @param directory the directory of the data files (for meta information only)
     */
    constructor(private esUrl: string, private created: Date, private dataFiles: string[], private directory: string) {
    }

    public getDirectory(): string {
        return this.directory;
    }

    /**
     * starts the parsing of the data files provided in the
     * constructor.
     * 
     * The returned Promise resolves after parsing has finished.
     * In particular, the data is not yet ingested into Elasticsearch,
     * but prepared to be. Use indexToElasticsearch() to trigger the actual ingestion. 
     * 
     * @returns a Promise that resolves after parsing is finished
     */
    public ingestDataFiles(): Promise<any> {
        console.log('starting ingestion for dir:', this.directory);

        this.totalFiles = this.dataFiles.length;
        console.log('ingesting files. count:', this.totalFiles);

        return new Promise((resolve, reject) => {
            Promise.all(this.dataFiles.map(df => {
                return this.parseSingleFile(df);
            })).then(ready => {
                console.log('all files parsed. payload length:', this.payload.length);
                resolve();
            });
        });

    }

    private parseSingleFile(filename: string) {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, (err, data) => {
                try {
                    if (err) {
                        throw err;
                    }

                    this.parseByteData(Uint8Array.from(data));

                    resolve();
                }
                catch (e) {
                    console.error('could not parse:', filename);
                    resolve();
                }
            });
        });
    }

    /**
     * parses protobuf payload (byte array) and
     * stores the result in an internal payload buffer.
     * 
     * use indexToElasticsearch() to trigger the actual ingestion.
     * 
     * @param arrByte the protobuf data as a byte array
     */
    public parseByteData(arrByte: Uint8Array) {
        var b64 = this.toBase64String(arrByte);
        var candidate = arrByte.slice(2);
        var msg = sensorisMessages.DataMessages.deserializeBinary(candidate);

        var list = msg.getDataMessageList();

        list.forEach(dm => {
            var currentEvent = new SrtiEvent();
            currentEvent.protoPayload = b64;
            currentEvent.subType = [];
            currentEvent.created = this.created;


            // outputIfDefined(dm.toObject(), meaningfulPropertiesDataMessage);

            dm.getEventGroupList().forEach(eg => {
                // outputIfDefined(eg.toObject(), meaningfulPropertiesEventGroup);

                const coordsList = [];
                let startTime = 0;
                let endTime = 0;

                if (eg.getLocalizationCategory().getVehicleOdometryList() && eg.getLocalizationCategory().getVehicleOdometryList().length > 0) {
                    console.log('odo', eg.getLocalizationCategory().getVehicleOdometryList());
                }

                eg.getLocalizationCategory().getVehiclePositionAndOrientationList().forEach(vpao => {
                    // console.log('pos', vpao.getOrientationAndAccuracy().toObject());
                    // outputIfDefined(vpao.toObject(), meaningfulPropertiesVehiclePositionAndOrientation);
                    if (vpao.getEnvelope()) {
                        // outputIfDefined(vpao.getEnvelope().toObject(), meaningfulPropertiesVehiclePositionAndOrientationEnvelope);
                        var unixTime = vpao.getEnvelope().getTimestamp().getPosixTime().toObject().value;

                        if (startTime === 0) {
                            // first time value, use it for both
                            startTime = unixTime;
                            endTime = unixTime;
                        } else if (startTime > unixTime) {
                            startTime = unixTime;
                        } else if (endTime < unixTime) {
                            endTime = unixTime;
                        }
                    }

                    // console.log('pos', vpao.getPositionAndAccuracy().toObject());
                    // outputIfDefined(vpao.getPositionAndAccuracy().toObject(), meaningfulPropertiesPositionAndAccuracy);

                    // coords loat lon --> x/10^8
                    var coords = vpao.getPositionAndAccuracy().getGeographicWgs84();
                    var lon = coords.getLongitude() / (10 ** 8);
                    var lat = coords.getLatitude() / (10 ** 8);
                    coordsList.push([lon, lat]);


                    // console.log('currentEvent: ' + currentEvent);                            
                });

                currentEvent.geometry = {
                    type: 'LineString',
                    coordinates: coordsList
                };

                currentEvent.location = {
                    lat: coordsList[0][1],
                    lon: coordsList[0][0],
                };

                currentEvent.timeStart = new Date(startTime);
                currentEvent.timeEnd = new Date(endTime);

                // console.log(eg.getTrafficEventsCategory().toObject());
                if (eg.getTrafficEventsCategory()) {
                    currentEvent.type = 'traffic';

                    eg.getTrafficEventsCategory().getDangerousSlowDownList().forEach(dsd => {
                        currentEvent.subType.push('DangerousSlowDown');
                    });

                    eg.getTrafficEventsCategory().getTrafficConditionList().forEach(tc => {
                        currentEvent.subType.push('TrafficCondition');
                    });

                    eg.getTrafficEventsCategory().getRoadworksList().forEach(rw => {
                        currentEvent.subType.push('Roadworks');
                    });

                    eg.getTrafficEventsCategory().getRoadWeatherConditionList().forEach(rwc => {
                        currentEvent.subType.push('RoadWeatherCondition');
                    });

                    eg.getTrafficEventsCategory().getHazardList().forEach(h => {
                        currentEvent.subType.push('Hazard');
                        // console.log('hazard', h.getEnvelope().toObject());
                        if (h.getEnvelope()) {
                            h.getEnvelope().getExtensionList().forEach(ex => {
                                currentEvent.categoricalValue = this.parseBase64String(ex.toObject().value);
                            });
                        }
                    });

                }

                if (eg.getWeatherCategory()) {
                    currentEvent.type = 'weather';

                    if (eg.getWeatherCategory().getEnvelope()) {
                        console.log('env', eg.getWeatherCategory().getEnvelope().toObject());
                    }

                    eg.getWeatherCategory().getPrecipitationList().forEach(p => {
                        currentEvent.subType.push('precipitation');
                        if (p.getEnvelope()) {
                            p.getEnvelope().getExtensionList().forEach(ex => {
                                currentEvent.categoricalValue = this.parseBase64String(ex.toObject().value);
                            });
                        }
                    });
                }

                if (!currentEvent.type) {
                    currentEvent.type = 'unknown';
                    console.log('what?', eg.toObject());
                }

            });

            this.payload += this.encodeEventPayload(currentEvent);

            if (++this.currentChunkCount > this.chunkSize) {
                this.chunks.push(this.payload);
                this.payload = '';
                this.currentChunkCount = 0;
            }

        });
    }

    private parseBase64String(value: any): any {
        let result = Buffer.from(value.trim(), 'base64').toString('utf-8').trim();
        result = result.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
        return result;
    }

    private toBase64String(bytes: any): string {
        let result = Buffer.from(bytes).toString('base64');
        return result;
    }

    private fromBase64String(data: string): Uint8Array {
        let result = new Buffer(data, 'base64');
        return result;;
    }

    private addToArray(prop: any, arr: any[]) {
        if (arr.indexOf(prop) < 0) {
            arr.push(prop);
        }
    }

    private outputIfDefined(obj: any, meaningfulProperties: any[]) {
        for (var prop in obj) {
            // skip loop if the property is from prototype
            if (!obj.hasOwnProperty(prop)) continue;
            // your code
            if (obj[prop] && obj[prop] !== '' && obj[prop] !== null && obj[prop] !== undefined) {
                if (Array.isArray(obj[prop]) && obj[prop].length === 0) {

                } else {
                    // console.log('HAS VALUE! ' + prop + '=' + obj[prop]);
                    this.addToArray(prop, meaningfulProperties);
                }
            }

        }
    }

    private encodeEventPayload(eventToIngest: any) {
        var result = '{ "index" : { "_index" : "events", "_type" : "_doc" } }\n';
        result += JSON.stringify(eventToIngest);
        result += '\n';
        return result;
    }

    /**
     * triggers the ingestion of the prepared payload
     * into Elasticsearch.
     */
    public indexToElasticsearch() {
        if (this.payload.length > 0) {
            this.chunks.push(this.payload);
            this.payload = '';
        }

        console.log('loading chunks to ES. count:', this.chunks.length, this.directory);
        this.chunks.forEach(cp => {
            let options = {
                method: 'POST',
                uri: this.esUrl + '/_bulk',
                body: cp,
                headers: {
                    "Content-Type": "application/x-ndjson"
                }
            };

            requestPromise(options).then(response => {
                console.log('data ingested for directory:', this.directory);
            }).catch(err => {
                console.warn('error with ES ingestion:', err);
            });

        });
    }
}

