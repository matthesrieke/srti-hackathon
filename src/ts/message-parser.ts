import { goog } from 'google-protobuf';
import * as sensorisMessagesImport from '../js/sensoris/protobuf/messages/data_pb';
import { default  as rp } from 'request-promise-native';
import * as fs from 'fs';
const sensorisMessages = sensorisMessagesImport as any;

export class SrtiEvent {

    geometry: any;
    timeStart: Date;
    timeEnd: Date;
    type: string;
    subType: string;
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

    private baseDir = './data';
    private esUrl = 'http://localhost:9200';
        

    public startIngestion() {
        var dataFiles = this.walk(this.baseDir);
        console.log('dataFiles count', dataFiles.length);
        this.totalFiles = dataFiles.length;
        dataFiles.forEach(f => {
            this.ingestSingleFile(f); 
        });
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
    
                   
                    // outputIfDefined(dm.toObject(), meaningfulPropertiesDataMessage);
    
                    dm.getEventGroupList().forEach(eg => {
                        // outputIfDefined(eg.toObject(), meaningfulPropertiesEventGroup);

                        const coordsList = [];
                        let startTime = 0;
                        let endTime = 0;
                        
                        eg.getLocalizationCategory().getVehiclePositionAndOrientationList().forEach(vpao => {
                            // console.log('pos', vpao.getOrientationAndAccuracy().toObject());
                            // outputIfDefined(vpao.toObject(), meaningfulPropertiesVehiclePositionAndOrientation);
                            if (vpao.getEnvelope()) {
                                // outputIfDefined(vpao.getEnvelope().toObject(), meaningfulPropertiesVehiclePositionAndOrientationEnvelope);
                                var unixTime = vpao.getEnvelope().getTimestamp().getPosixTime().toObject().value;

                                if (this.deltaTimes <10) {
                                    console.log(unixTime);
                                }
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
                            type : 'LineString',
                            coordinates : coordsList
                        };

                        if (startTime === endTime) {
                            this.deltaTimes++;
                        }

                        currentEvent.timeStart = new Date(startTime);
                        currentEvent.timeEnd = new Date(endTime);

                        // console.log(eg.getTrafficEventsCategory().toObject());
                        if (eg.getTrafficEventsCategory()) {
                            currentEvent.type = 'traffic';
    
                            // outputIfDefined(eg.getTrafficEventsCategory().toObject(), meaningfulPropertiesTrafficEventsCategory);
    
                            eg.getTrafficEventsCategory().getDangerousSlowDownList().forEach(dsd => {
                                currentEvent.subType = 'slowDown';
                            });
    
                            eg.getTrafficEventsCategory().getHazardList().forEach(h => {
                                currentEvent.subType = 'hazard';
                                // console.log('hazard', h.getEnvelope().toObject());
                                if (h.getEnvelope().getExtensionList()) {
                                    h.getEnvelope().getExtensionList().forEach(ex => {
                                        currentEvent.value = Buffer.from(ex.toObject().value.trim(), 'base64').toString('utf-8').trim();
                                        currentEvent.value = currentEvent.value.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
                                    });
                                }
                            });
    
                        }
    
                        if (eg.getWeatherCategory()) {
                            currentEvent.type = 'weather';
                        }
    
                        if (!eg.getTrafficEventsCategory() && !eg.getWeatherCategory()) {
                            currentEvent.type = 'unknown';
                            console.log('what?', eg.toObject());
                        }
                        
                    });
    
                    
                    this.payload += this.ingest(currentEvent);
    
                    if (++this.currentChunkCount > this.chunkSize) {
                        this.chunks.push(this.payload);
                        this.payload = '';
                        this.currentChunkCount = 0;
                    }
    
                    if (++this.preparedFiles >= this.totalFiles) {
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

    private walk(dir: string) {
        var results = [];
        var list = fs.readdirSync(dir);
        list.forEach(file => {
            file = dir + '/' + file;
            var stat = fs.statSync(file);
            if (stat && stat.isDirectory()) { 
                /* Recurse into a subdirectory */
                results = results.concat(this.walk(file));
            } else { 
                /* Is a file */
                results.push(file);
            }
        });
        return results;
    }

    private ingest(eventToIngest: any) {
        var result = '{ "index" : { "_index" : "events", "_type" : "_doc" } }\n';
        result += JSON.stringify(eventToIngest);
        result += '\n';
        return result;
    }
    
    private indexToElasticsearch(chunkPayloads: string[]) {
        console.log('events with time detla', this.deltaTimes);
        let options = {
            method: 'POST',
            uri: this.esUrl + '/_bulk',
            body: chunkPayloads[0],
            headers: {
                "Content-Type": "application/x-ndjson"
            }
        };
        
        rp(options).then(res => {
            console.log('data ingested!');
        }, err => {
            console.error('could not ingest data');
        });
    }
}

