var goog = require('google-protobuf');
var protoMessages = require('../../lib/sensoris/protobuf/messages/data_pb');
var rp = require('request-promise-native');

var fs = require('fs');
var baseDir = './data/';

const esUrl = 'http://localhost:9200';

var chunkSize = 100000;
var currentChunkCount = 0;
var chunks = [];

class SrtiEvent {

    location;
    time;
    type;
    subType;
    value;

    constructor() {

    }
}

var addToArray = function(prop, arr) {
    if (arr.indexOf(prop) < 0) {
        arr.push(prop);
    }
}

var outputIfDefined = function(obj, meaningfulProperties) {
    for (var prop in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(prop)) continue;
        // your code
        if (obj[prop] && obj[prop] !== '' && obj[prop] !== null && obj[prop] !== undefined) {
            if (Array.isArray(obj[prop]) && obj[prop].length === 0) {
                
            } else {
                // console.log('HAS VALUE! ' + prop + '=' + obj[prop]);
                addToArray(prop, meaningfulProperties);
            }
        }
        
    }

}

var totalFiles = 0;
var preparedFiles = 0;
var payload = '';

var ingestSingleFile = function(fileame) {
    fs.readFile(fileame, function(err, data) {
        if (err) throw err;
        
        var arrByte = Uint8Array.from(data);
        
        try {
            var candidate = arrByte.slice(2);
            var msg = proto.sensoris.protobuf.messages.data.DataMessages.deserializeBinary(candidate);
            var list = msg.getDataMessageList();

            list.forEach((dm) => {
                var currentEvent = new SrtiEvent();

                // console.log(dm.toObject());
                // outputIfDefined(dm.toObject(), meaningfulPropertiesDataMessage);

                dm.getEventGroupList().forEach(eg => {
                    // outputIfDefined(eg.toObject(), meaningfulPropertiesEventGroup);

                    eg.getLocalizationCategory().getVehiclePositionAndOrientationList().forEach(vpao => {
                        // outputIfDefined(vpao.toObject(), meaningfulPropertiesVehiclePositionAndOrientation);
                        if (vpao.getEnvelope()) {
                            // outputIfDefined(vpao.getEnvelope().toObject(), meaningfulPropertiesVehiclePositionAndOrientationEnvelope);
                            var unixTime = vpao.getEnvelope().getTimestamp().getPosixTime().toObject().value;
                            currentEvent.time = new Date(unixTime);
                        }

                        // console.log('pos', vpao.getPositionAndAccuracy().toObject());
                        // outputIfDefined(vpao.getPositionAndAccuracy().toObject(), meaningfulPropertiesPositionAndAccuracy);

                        // coords loat lon --> x/10^8
                        var coords = vpao.getPositionAndAccuracy().getGeographicWgs84();
                        var lon = coords.getLongitude() / (10 ** 8);
                        var lat = coords.getLatitude() / (10 ** 8);
                        currentEvent.location = {
                            lat: lat,
                            lon: lon
                        };
                        
                        // console.log('currentEvent: ' + currentEvent);                            
                    });

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

                
                payload += ingest(currentEvent);

                if (++currentChunkCount > chunkSize) {
                    chunks.push(payload);
                    payload = '';
                }

                if (++preparedFiles >= totalFiles) {
                    if (currentChunkCount > 0) {
                        chunks.push(payload);
                    }
                    console.log('total chunks:', chunks.length);
                    indexToElasticsearch(chunks);
                }
            });
        }
        catch (e) {
            console.error('could not parse: ', fileame);
            ++preparedFiles;
            return;
        }
        
    });
}

var walk = function(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else { 
            /* Is a file */
            results.push(file);
        }
    });
    return results;
}

var dataFiles = walk(baseDir);
console.log('dataFiles count', dataFiles.length);
totalFiles = dataFiles.length;
dataFiles.forEach(f => {
    ingestSingleFile(f); 
});

var ingest = function (eventToIngest) {
    var result = '{ "index" : { "_index" : "events", "_type" : "_doc" } }\n';
    result += JSON.stringify(eventToIngest);
    result += '\n';
    return result;
}

var indexToElasticsearch = function (chunkPayloads) {
    let options = {
        method: 'POST',
        uri: esUrl + '/_bulk',
        body: chunkPayloads[0],
        headers: {
            "Content-Type": "application/x-ndjson"
        }
    };
    
    rp(options).then(res => {
        console.log('data ingested:', res);
    }, err => {
        console.error(err);
    });
}