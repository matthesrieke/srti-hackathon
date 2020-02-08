import { goog } from 'google-protobuf';
import * as sensorisMessagesImport from '../js/sensoris/protobuf/messages/data_pb';
import { default as rp } from 'request-promise-native';
import * as fs from 'fs';

const sensorisMessages = sensorisMessagesImport as any;

export class SrtiEvent {

    created: Date;
    location: any;
    geometry: any;
    timeStart: Date;
    timeEnd: Date;
    type: string;
    subType: string[];
    value: any;

}

export class MessageParser {
    private totalFiles = 0;
    private preparedFiles = 0;
    private payload = '';
    private chunkSize = 100000;
    private currentChunkCount = 0;
    private chunks = [];
    private deltaTimes = 0;

    constructor(private esUrl: string, private created: Date) {
    }

    public ingestDataFiles(dataFiles: string[]) {
        this.totalFiles = dataFiles.length;
        dataFiles.forEach(df => this.ingestSingleFile(df));
    }


    private ingestSingleFile(filename: string) {
        fs.readFile(filename, (err, data) => {
            if (err) throw err;

            var arrByte = Uint8Array.from(data);

            try {
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
                                    // h.getEnvelope().getExtensionList().forEach(ex => {
                                    //     currentEvent.value = this.fromBase64String(ex.toObject().value);
                                    // });
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
                                    // p.getEnvelope().getExtensionList().forEach(ex => {
                                    //     currentEvent.value = this.fromBase64String(ex.toObject().value);
                                    // });
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

                    if (++this.preparedFiles >= this.totalFiles) {
                        // last file has been processed
                        if (this.currentChunkCount > 0) {
                            this.chunks.push(this.payload);
                        }
                        console.log('total chunks:', this.chunks.length);
                        this.indexToElasticsearch(this.chunks);
                    }
                });
            }
            catch (e) {
                console.error('could not parse: ', filename);
                ++this.preparedFiles;
                return;
            }

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

    private indexToElasticsearch(chunkPayloads: string[]) {
        console.log('loading chunks to ES. count:', chunkPayloads.length);
        chunkPayloads.forEach(cp => {
            let options = {
                method: 'POST',
                uri: this.esUrl + '/_bulk',
                body: cp,
                headers: {
                    "Content-Type": "application/x-ndjson"
                }
            };

            rp(options).then(res => {
                console.log('data ingested!');
            }, err => {
                console.error('could not ingest data');
            });
        });
    }
}

