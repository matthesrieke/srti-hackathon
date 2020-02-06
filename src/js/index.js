var goog = require('google-protobuf');
var protoMessages = require('../../lib/sensoris/protobuf/messages/data_pb');
var rp = require('request-promise-native');

var fs = require('fs');
var baseDir = './data/00/';

const esUrl = 'http://localhost:9200';

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

fs.readdir(baseDir, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    var meaningfulPropertiesDataMessage = [];
    var meaningfulPropertiesEventGroup = [];
    var meaningfulPropertiesVehiclePositionAndOrientation = [];
    var meaningfulPropertiesVehiclePositionAndOrientationEnvelope = [];
    var meaningfulPropertiesPositionAndAccuracy = [];
    var meaningfulPropertiesTrafficEventsCategory = [];

    var targetFileCount = files.length;
    var readyCount = 0;

    var resultingEvents = [];

    files.forEach(function (file) {

        var idx = 1;
        fs.readFile(baseDir + file, function(err, data) {
            if (err) throw err;
            
            if (idx++ > 1) {
                return;
            }

            var arrByte = Uint8Array.from(data);
            
            
            
            try {
                var candidate = arrByte.slice(2);
                var msg = proto.sensoris.protobuf.messages.data.DataMessages.deserializeBinary(candidate);
                var list = msg.getDataMessageList();

                list.forEach((dm) => {
                    var currentEvent = new SrtiEvent();

                    // console.log(dm.toObject());
                    outputIfDefined(dm.toObject(), meaningfulPropertiesDataMessage);

                    dm.getEventGroupList().forEach(eg => {
                        outputIfDefined(eg.toObject(), meaningfulPropertiesEventGroup);

                        eg.getLocalizationCategory().getVehiclePositionAndOrientationList().forEach(vpao => {
                            outputIfDefined(vpao.toObject(), meaningfulPropertiesVehiclePositionAndOrientation);
                            if (vpao.getEnvelope()) {
                                outputIfDefined(vpao.getEnvelope().toObject(), meaningfulPropertiesVehiclePositionAndOrientationEnvelope);
                                currentEvent.time = vpao.getEnvelope().getTimestamp().getPosixTime().toObject().value;
                            }
                            

                            // console.log('pos', vpao.getPositionAndAccuracy().toObject());
                            outputIfDefined(vpao.getPositionAndAccuracy().toObject(), meaningfulPropertiesPositionAndAccuracy);

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

                            outputIfDefined(eg.getTrafficEventsCategory().toObject(), meaningfulPropertiesTrafficEventsCategory);

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

                    resultingEvents.push(currentEvent);
                });
            }
            catch (e) {
                console.error(e);
                return;
            }          

            if (++readyCount >= targetFileCount) {
                console.log('meaningfulPropertiesDataMessage: ', meaningfulPropertiesDataMessage);
                console.log('meaningfulPropertiesEventGroup: ', meaningfulPropertiesEventGroup);
                console.log('meaningfulPropertiesVehiclePositionAndOrientation', meaningfulPropertiesVehiclePositionAndOrientation);
                console.log('meaningfulPropertiesVehiclePositionAndOrientationEnvelope', meaningfulPropertiesVehiclePositionAndOrientationEnvelope);
                console.log('meaningfulPropertiesPositionAndAccuracy', meaningfulPropertiesPositionAndAccuracy);
                console.log('meaningfulPropertiesTrafficEventsCategory', meaningfulPropertiesTrafficEventsCategory);
                
                ingest(resultingEvents);
            }
            
        });
    });
});


var ingest = function (eventsToIngest) {
    console.log('EVENTS', JSON.stringify(eventsToIngest, null, 4));
    eventsToIngest.forEach(p => {
        let options = {
            method: 'POST',
            uri: esUrl + '/events/_doc',
            body: p,
            json: true // Automatically stringifies the body to JSON
        };
        
        rp(options).then(res => {
            console.log('document created:', res);
        }, err => {
            console.error(err);
        });
    });
}
