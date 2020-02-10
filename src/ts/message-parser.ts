import { goog } from 'google-protobuf';
import * as sensorisMessagesImport from '../js/sensoris/protobuf/messages/data_pb';
import { default as rp } from 'request-promise-native';
import { default as request } from 'request';
import * as fs from 'fs';

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

}

export class MessageParser {

    private totalFiles = 0;
    private preparedFiles = 0;
    private payload = '';
    private chunkSize = 100000;
    private currentChunkCount = 0;
    private chunks = [];
    private deltaTimes = 0;
    finishedCallback: any;
    finished: boolean;


    constructor(private esUrl: string, private created: Date, private dataFiles: string[], private directory: string) {
    }

    getDirectory(): string {
        return this.directory;
    }

    public ingestDataFiles() {
        console.log('[DEBUG] starting ingestion for dir', this.directory);

        this.totalFiles = this.dataFiles.length;
        console.log('[DEBUG] ingesting files. count', this.totalFiles);

        return new Promise((resolve, reject) => {
            Promise.all(this.dataFiles.map(df => {
                return this.ingestSingleFile(df);
            })).then(ready => {
                this.indexToElasticsearch().then(done => {
                    resolve();
                });
            });
        });
        
    }

    private ingestSingleFile(filename: string) {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, (err, data) => {
                try {
                    if (err) {
                        throw err;
                    }
    
                    var arrByte = Uint8Array.from(data);
                    var candidate = arrByte.slice(2);
                    var msg = sensorisMessages.DataMessages.deserializeBinary(candidate);
    
                    var list = msg.getDataMessageList();
    
                    list.forEach(dm => {
                        var currentEvent = new SrtiEvent();
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
                                    this.deltaTimes++;
                                } else {
    
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
                                            currentEvent.categoricalValue = this.fromBase64String(ex.toObject().value);
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
                                            currentEvent.categoricalValue = this.fromBase64String(ex.toObject().value);
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

                        resolve();
                    });
                }
                catch (e) {
                    console.error('could not parse: ', filename);
                    resolve();
                }    
            });
        });
    }

    private fromBase64String(value: any): any {
        let result = Buffer.from(value.trim(), 'base64').toString('utf-8').trim();
        result = result.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
        return result;
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

    private indexToElasticsearch() {
        console.log('[DEBUG] loading chunks to ES. count:', this.chunks.length, this.directory);
        return Promise.all(this.chunks.map(cp => {
            let options = {
                method: 'POST',
                uri: this.esUrl + '/_bulk',
                body: cp,
                headers: {
                    "Content-Type": "application/x-ndjson"
                }
            };

            return new Promise((resolve, reject) => {
                request(options, (error, response, body) => {
                    if (error) {
                        console.error('could not ingest data');
                        reject(error);
                    } else {
                        console.log('data ingested!');
                        resolve();
                    }
                });
            });
            
        }));
    }
}

