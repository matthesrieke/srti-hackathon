// source: sensoris/protobuf/messages/data.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var sensoris_protobuf_types_base_pb = require('../../../sensoris/protobuf/types/base_pb.js');
goog.object.extend(proto, sensoris_protobuf_types_base_pb);
var sensoris_protobuf_types_source_pb = require('../../../sensoris/protobuf/types/source_pb.js');
goog.object.extend(proto, sensoris_protobuf_types_source_pb);
var sensoris_protobuf_types_spatial_pb = require('../../../sensoris/protobuf/types/spatial_pb.js');
goog.object.extend(proto, sensoris_protobuf_types_spatial_pb);
var sensoris_protobuf_categories_localization_pb = require('../../../sensoris/protobuf/categories/localization_pb.js');
goog.object.extend(proto, sensoris_protobuf_categories_localization_pb);
var sensoris_protobuf_categories_object_detection_pb = require('../../../sensoris/protobuf/categories/object_detection_pb.js');
goog.object.extend(proto, sensoris_protobuf_categories_object_detection_pb);
var sensoris_protobuf_categories_weather_pb = require('../../../sensoris/protobuf/categories/weather_pb.js');
goog.object.extend(proto, sensoris_protobuf_categories_weather_pb);
var sensoris_protobuf_categories_driving_behavior_pb = require('../../../sensoris/protobuf/categories/driving_behavior_pb.js');
goog.object.extend(proto, sensoris_protobuf_categories_driving_behavior_pb);
var sensoris_protobuf_categories_intersection_attribution_pb = require('../../../sensoris/protobuf/categories/intersection_attribution_pb.js');
goog.object.extend(proto, sensoris_protobuf_categories_intersection_attribution_pb);
var sensoris_protobuf_categories_road_attribution_pb = require('../../../sensoris/protobuf/categories/road_attribution_pb.js');
goog.object.extend(proto, sensoris_protobuf_categories_road_attribution_pb);
var sensoris_protobuf_categories_traffic_regulation_pb = require('../../../sensoris/protobuf/categories/traffic_regulation_pb.js');
goog.object.extend(proto, sensoris_protobuf_categories_traffic_regulation_pb);
var sensoris_protobuf_categories_traffic_events_pb = require('../../../sensoris/protobuf/categories/traffic_events_pb.js');
goog.object.extend(proto, sensoris_protobuf_categories_traffic_events_pb);
var sensoris_protobuf_categories_traffic_maneuver_pb = require('../../../sensoris/protobuf/categories/traffic_maneuver_pb.js');
goog.object.extend(proto, sensoris_protobuf_categories_traffic_maneuver_pb);
var sensoris_protobuf_categories_brake_pb = require('../../../sensoris/protobuf/categories/brake_pb.js');
goog.object.extend(proto, sensoris_protobuf_categories_brake_pb);
var sensoris_protobuf_categories_powertrain_pb = require('../../../sensoris/protobuf/categories/powertrain_pb.js');
goog.object.extend(proto, sensoris_protobuf_categories_powertrain_pb);
var sensoris_protobuf_categories_map_pb = require('../../../sensoris/protobuf/categories/map_pb.js');
goog.object.extend(proto, sensoris_protobuf_categories_map_pb);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.Envelope', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.Format', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.EventRelation', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.Type', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.EventSource', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventReferenceCase', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.Paths', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessage.Paths.TypeCase', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessages', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.DataMessages.Envelope', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.EventGroup', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.EventGroup.Envelope', null, global);
goog.exportSymbol('proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.EventGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.EventGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.EventGroup.displayName = 'proto.sensoris.protobuf.messages.data.EventGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensoris.protobuf.messages.data.EventGroup.Envelope.repeatedFields_, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.EventGroup.Envelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.EventGroup.Envelope.displayName = 'proto.sensoris.protobuf.messages.data.EventGroup.Envelope';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.displayName = 'proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensoris.protobuf.messages.data.DataMessage.repeatedFields_, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessage.displayName = 'proto.sensoris.protobuf.messages.data.DataMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.repeatedFields_, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.displayName = 'proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.repeatedFields_, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.displayName = 'proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessage.Paths = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sensoris.protobuf.messages.data.DataMessage.Paths.oneofGroups_);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessage.Paths, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessage.Paths.displayName = 'proto.sensoris.protobuf.messages.data.DataMessage.Paths';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensoris.protobuf.messages.data.DataMessage.Envelope.repeatedFields_, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessage.Envelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessage.Envelope.displayName = 'proto.sensoris.protobuf.messages.data.DataMessage.Envelope';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.displayName = 'proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.displayName = 'proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.displayName = 'proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.displayName = 'proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.displayName = 'proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.repeatedFields_, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessage.EventRelation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.displayName = 'proto.sensoris.protobuf.messages.data.DataMessage.EventRelation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensoris.protobuf.messages.data.DataMessage.EventSource.repeatedFields_, proto.sensoris.protobuf.messages.data.DataMessage.EventSource.oneofGroups_);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessage.EventSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessage.EventSource.displayName = 'proto.sensoris.protobuf.messages.data.DataMessage.EventSource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.repeatedFields_, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.displayName = 'proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessages = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensoris.protobuf.messages.data.DataMessages.repeatedFields_, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessages, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessages.displayName = 'proto.sensoris.protobuf.messages.data.DataMessages';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensoris.protobuf.messages.data.DataMessages.Envelope.repeatedFields_, null);
};
goog.inherits(proto.sensoris.protobuf.messages.data.DataMessages.Envelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.messages.data.DataMessages.Envelope.displayName = 'proto.sensoris.protobuf.messages.data.DataMessages.Envelope';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.EventGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.EventGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.EventGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    envelope: (f = msg.getEnvelope()) && proto.sensoris.protobuf.messages.data.EventGroup.Envelope.toObject(includeInstance, f),
    localizationCategory: (f = msg.getLocalizationCategory()) && sensoris_protobuf_categories_localization_pb.LocalizationCategory.toObject(includeInstance, f),
    objectDetectionCategory: (f = msg.getObjectDetectionCategory()) && sensoris_protobuf_categories_object_detection_pb.ObjectDetectionCategory.toObject(includeInstance, f),
    weatherCategory: (f = msg.getWeatherCategory()) && sensoris_protobuf_categories_weather_pb.WeatherCategory.toObject(includeInstance, f),
    drivingBehaviorCategory: (f = msg.getDrivingBehaviorCategory()) && sensoris_protobuf_categories_driving_behavior_pb.DrivingBehaviorCategory.toObject(includeInstance, f),
    intersectionAttributionCategory: (f = msg.getIntersectionAttributionCategory()) && sensoris_protobuf_categories_intersection_attribution_pb.IntersectionAttributionCategory.toObject(includeInstance, f),
    roadAttributionCategory: (f = msg.getRoadAttributionCategory()) && sensoris_protobuf_categories_road_attribution_pb.RoadAttributionCategory.toObject(includeInstance, f),
    trafficRegulationCategory: (f = msg.getTrafficRegulationCategory()) && sensoris_protobuf_categories_traffic_regulation_pb.TrafficRegulationCategory.toObject(includeInstance, f),
    trafficEventsCategory: (f = msg.getTrafficEventsCategory()) && sensoris_protobuf_categories_traffic_events_pb.TrafficEventsCategory.toObject(includeInstance, f),
    trafficManeuverCategory: (f = msg.getTrafficManeuverCategory()) && sensoris_protobuf_categories_traffic_maneuver_pb.TrafficManeuverCategory.toObject(includeInstance, f),
    brakeCategory: (f = msg.getBrakeCategory()) && sensoris_protobuf_categories_brake_pb.BrakeCategory.toObject(includeInstance, f),
    powertrainCategory: (f = msg.getPowertrainCategory()) && sensoris_protobuf_categories_powertrain_pb.PowertrainCategory.toObject(includeInstance, f),
    mapCategory: (f = msg.getMapCategory()) && sensoris_protobuf_categories_map_pb.MapCategory.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup}
 */
proto.sensoris.protobuf.messages.data.EventGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.EventGroup;
  return proto.sensoris.protobuf.messages.data.EventGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.EventGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup}
 */
proto.sensoris.protobuf.messages.data.EventGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensoris.protobuf.messages.data.EventGroup.Envelope;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.EventGroup.Envelope.deserializeBinaryFromReader);
      msg.setEnvelope(value);
      break;
    case 2:
      var value = new sensoris_protobuf_categories_localization_pb.LocalizationCategory;
      reader.readMessage(value,sensoris_protobuf_categories_localization_pb.LocalizationCategory.deserializeBinaryFromReader);
      msg.setLocalizationCategory(value);
      break;
    case 3:
      var value = new sensoris_protobuf_categories_object_detection_pb.ObjectDetectionCategory;
      reader.readMessage(value,sensoris_protobuf_categories_object_detection_pb.ObjectDetectionCategory.deserializeBinaryFromReader);
      msg.setObjectDetectionCategory(value);
      break;
    case 4:
      var value = new sensoris_protobuf_categories_weather_pb.WeatherCategory;
      reader.readMessage(value,sensoris_protobuf_categories_weather_pb.WeatherCategory.deserializeBinaryFromReader);
      msg.setWeatherCategory(value);
      break;
    case 5:
      var value = new sensoris_protobuf_categories_driving_behavior_pb.DrivingBehaviorCategory;
      reader.readMessage(value,sensoris_protobuf_categories_driving_behavior_pb.DrivingBehaviorCategory.deserializeBinaryFromReader);
      msg.setDrivingBehaviorCategory(value);
      break;
    case 6:
      var value = new sensoris_protobuf_categories_intersection_attribution_pb.IntersectionAttributionCategory;
      reader.readMessage(value,sensoris_protobuf_categories_intersection_attribution_pb.IntersectionAttributionCategory.deserializeBinaryFromReader);
      msg.setIntersectionAttributionCategory(value);
      break;
    case 7:
      var value = new sensoris_protobuf_categories_road_attribution_pb.RoadAttributionCategory;
      reader.readMessage(value,sensoris_protobuf_categories_road_attribution_pb.RoadAttributionCategory.deserializeBinaryFromReader);
      msg.setRoadAttributionCategory(value);
      break;
    case 8:
      var value = new sensoris_protobuf_categories_traffic_regulation_pb.TrafficRegulationCategory;
      reader.readMessage(value,sensoris_protobuf_categories_traffic_regulation_pb.TrafficRegulationCategory.deserializeBinaryFromReader);
      msg.setTrafficRegulationCategory(value);
      break;
    case 9:
      var value = new sensoris_protobuf_categories_traffic_events_pb.TrafficEventsCategory;
      reader.readMessage(value,sensoris_protobuf_categories_traffic_events_pb.TrafficEventsCategory.deserializeBinaryFromReader);
      msg.setTrafficEventsCategory(value);
      break;
    case 10:
      var value = new sensoris_protobuf_categories_traffic_maneuver_pb.TrafficManeuverCategory;
      reader.readMessage(value,sensoris_protobuf_categories_traffic_maneuver_pb.TrafficManeuverCategory.deserializeBinaryFromReader);
      msg.setTrafficManeuverCategory(value);
      break;
    case 11:
      var value = new sensoris_protobuf_categories_brake_pb.BrakeCategory;
      reader.readMessage(value,sensoris_protobuf_categories_brake_pb.BrakeCategory.deserializeBinaryFromReader);
      msg.setBrakeCategory(value);
      break;
    case 12:
      var value = new sensoris_protobuf_categories_powertrain_pb.PowertrainCategory;
      reader.readMessage(value,sensoris_protobuf_categories_powertrain_pb.PowertrainCategory.deserializeBinaryFromReader);
      msg.setPowertrainCategory(value);
      break;
    case 13:
      var value = new sensoris_protobuf_categories_map_pb.MapCategory;
      reader.readMessage(value,sensoris_protobuf_categories_map_pb.MapCategory.deserializeBinaryFromReader);
      msg.setMapCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.EventGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.EventGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.EventGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvelope();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensoris.protobuf.messages.data.EventGroup.Envelope.serializeBinaryToWriter
    );
  }
  f = message.getLocalizationCategory();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sensoris_protobuf_categories_localization_pb.LocalizationCategory.serializeBinaryToWriter
    );
  }
  f = message.getObjectDetectionCategory();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      sensoris_protobuf_categories_object_detection_pb.ObjectDetectionCategory.serializeBinaryToWriter
    );
  }
  f = message.getWeatherCategory();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      sensoris_protobuf_categories_weather_pb.WeatherCategory.serializeBinaryToWriter
    );
  }
  f = message.getDrivingBehaviorCategory();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      sensoris_protobuf_categories_driving_behavior_pb.DrivingBehaviorCategory.serializeBinaryToWriter
    );
  }
  f = message.getIntersectionAttributionCategory();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      sensoris_protobuf_categories_intersection_attribution_pb.IntersectionAttributionCategory.serializeBinaryToWriter
    );
  }
  f = message.getRoadAttributionCategory();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      sensoris_protobuf_categories_road_attribution_pb.RoadAttributionCategory.serializeBinaryToWriter
    );
  }
  f = message.getTrafficRegulationCategory();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      sensoris_protobuf_categories_traffic_regulation_pb.TrafficRegulationCategory.serializeBinaryToWriter
    );
  }
  f = message.getTrafficEventsCategory();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      sensoris_protobuf_categories_traffic_events_pb.TrafficEventsCategory.serializeBinaryToWriter
    );
  }
  f = message.getTrafficManeuverCategory();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      sensoris_protobuf_categories_traffic_maneuver_pb.TrafficManeuverCategory.serializeBinaryToWriter
    );
  }
  f = message.getBrakeCategory();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      sensoris_protobuf_categories_brake_pb.BrakeCategory.serializeBinaryToWriter
    );
  }
  f = message.getPowertrainCategory();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      sensoris_protobuf_categories_powertrain_pb.PowertrainCategory.serializeBinaryToWriter
    );
  }
  f = message.getMapCategory();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      sensoris_protobuf_categories_map_pb.MapCategory.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.repeatedFields_ = [15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.EventGroup.Envelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    origin: (f = msg.getOrigin()) && proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    google_protobuf_any_pb.Any.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.EventGroup.Envelope;
  return proto.sensoris.protobuf.messages.data.EventGroup.Envelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.deserializeBinaryFromReader);
      msg.setOrigin(value);
      break;
    case 15:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.EventGroup.Envelope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrigin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && sensoris_protobuf_types_base_pb.Timestamp.toObject(includeInstance, f),
    positionAndAccuracy: (f = msg.getPositionAndAccuracy()) && sensoris_protobuf_types_spatial_pb.PositionAndAccuracy.toObject(includeInstance, f),
    orientationAndAccuracy: (f = msg.getOrientationAndAccuracy()) && sensoris_protobuf_types_spatial_pb.RotationAndAccuracy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin;
  return proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sensoris_protobuf_types_base_pb.Timestamp;
      reader.readMessage(value,sensoris_protobuf_types_base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = new sensoris_protobuf_types_spatial_pb.PositionAndAccuracy;
      reader.readMessage(value,sensoris_protobuf_types_spatial_pb.PositionAndAccuracy.deserializeBinaryFromReader);
      msg.setPositionAndAccuracy(value);
      break;
    case 3:
      var value = new sensoris_protobuf_types_spatial_pb.RotationAndAccuracy;
      reader.readMessage(value,sensoris_protobuf_types_spatial_pb.RotationAndAccuracy.deserializeBinaryFromReader);
      msg.setOrientationAndAccuracy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sensoris_protobuf_types_base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPositionAndAccuracy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sensoris_protobuf_types_spatial_pb.PositionAndAccuracy.serializeBinaryToWriter
    );
  }
  f = message.getOrientationAndAccuracy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      sensoris_protobuf_types_spatial_pb.RotationAndAccuracy.serializeBinaryToWriter
    );
  }
};


/**
 * optional sensoris.protobuf.types.base.Timestamp timestamp = 1;
 * @return {?proto.sensoris.protobuf.types.base.Timestamp}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.getTimestamp = function() {
  return /** @type{?proto.sensoris.protobuf.types.base.Timestamp} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_types_base_pb.Timestamp, 1));
};


/**
 * @param {?proto.sensoris.protobuf.types.base.Timestamp|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sensoris.protobuf.types.spatial.PositionAndAccuracy position_and_accuracy = 2;
 * @return {?proto.sensoris.protobuf.types.spatial.PositionAndAccuracy}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.getPositionAndAccuracy = function() {
  return /** @type{?proto.sensoris.protobuf.types.spatial.PositionAndAccuracy} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_types_spatial_pb.PositionAndAccuracy, 2));
};


/**
 * @param {?proto.sensoris.protobuf.types.spatial.PositionAndAccuracy|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.setPositionAndAccuracy = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.clearPositionAndAccuracy = function() {
  return this.setPositionAndAccuracy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.hasPositionAndAccuracy = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional sensoris.protobuf.types.spatial.RotationAndAccuracy orientation_and_accuracy = 3;
 * @return {?proto.sensoris.protobuf.types.spatial.RotationAndAccuracy}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.getOrientationAndAccuracy = function() {
  return /** @type{?proto.sensoris.protobuf.types.spatial.RotationAndAccuracy} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_types_spatial_pb.RotationAndAccuracy, 3));
};


/**
 * @param {?proto.sensoris.protobuf.types.spatial.RotationAndAccuracy|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.setOrientationAndAccuracy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.clearOrientationAndAccuracy = function() {
  return this.setOrientationAndAccuracy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin.prototype.hasOrientationAndAccuracy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Origin origin = 1;
 * @return {?proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.prototype.getOrigin = function() {
  return /** @type{?proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin} */ (
    jspb.Message.getWrapperField(this, proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin, 1));
};


/**
 * @param {?proto.sensoris.protobuf.messages.data.EventGroup.Envelope.Origin|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.prototype.setOrigin = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.prototype.clearOrigin = function() {
  return this.setOrigin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.prototype.hasOrigin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated google.protobuf.Any extension = 15;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 15));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup.Envelope} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.Envelope.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * optional Envelope envelope = 1;
 * @return {?proto.sensoris.protobuf.messages.data.EventGroup.Envelope}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.getEnvelope = function() {
  return /** @type{?proto.sensoris.protobuf.messages.data.EventGroup.Envelope} */ (
    jspb.Message.getWrapperField(this, proto.sensoris.protobuf.messages.data.EventGroup.Envelope, 1));
};


/**
 * @param {?proto.sensoris.protobuf.messages.data.EventGroup.Envelope|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.prototype.setEnvelope = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.clearEnvelope = function() {
  return this.setEnvelope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.hasEnvelope = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sensoris.protobuf.categories.localization.LocalizationCategory localization_category = 2;
 * @return {?proto.sensoris.protobuf.categories.localization.LocalizationCategory}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.getLocalizationCategory = function() {
  return /** @type{?proto.sensoris.protobuf.categories.localization.LocalizationCategory} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_categories_localization_pb.LocalizationCategory, 2));
};


/**
 * @param {?proto.sensoris.protobuf.categories.localization.LocalizationCategory|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.prototype.setLocalizationCategory = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.clearLocalizationCategory = function() {
  return this.setLocalizationCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.hasLocalizationCategory = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional sensoris.protobuf.categories.objectdetection.ObjectDetectionCategory object_detection_category = 3;
 * @return {?proto.sensoris.protobuf.categories.objectdetection.ObjectDetectionCategory}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.getObjectDetectionCategory = function() {
  return /** @type{?proto.sensoris.protobuf.categories.objectdetection.ObjectDetectionCategory} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_categories_object_detection_pb.ObjectDetectionCategory, 3));
};


/**
 * @param {?proto.sensoris.protobuf.categories.objectdetection.ObjectDetectionCategory|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.prototype.setObjectDetectionCategory = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.clearObjectDetectionCategory = function() {
  return this.setObjectDetectionCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.hasObjectDetectionCategory = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional sensoris.protobuf.categories.weather.WeatherCategory weather_category = 4;
 * @return {?proto.sensoris.protobuf.categories.weather.WeatherCategory}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.getWeatherCategory = function() {
  return /** @type{?proto.sensoris.protobuf.categories.weather.WeatherCategory} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_categories_weather_pb.WeatherCategory, 4));
};


/**
 * @param {?proto.sensoris.protobuf.categories.weather.WeatherCategory|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.prototype.setWeatherCategory = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.clearWeatherCategory = function() {
  return this.setWeatherCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.hasWeatherCategory = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional sensoris.protobuf.categories.drivingbehavior.DrivingBehaviorCategory driving_behavior_category = 5;
 * @return {?proto.sensoris.protobuf.categories.drivingbehavior.DrivingBehaviorCategory}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.getDrivingBehaviorCategory = function() {
  return /** @type{?proto.sensoris.protobuf.categories.drivingbehavior.DrivingBehaviorCategory} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_categories_driving_behavior_pb.DrivingBehaviorCategory, 5));
};


/**
 * @param {?proto.sensoris.protobuf.categories.drivingbehavior.DrivingBehaviorCategory|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.prototype.setDrivingBehaviorCategory = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.clearDrivingBehaviorCategory = function() {
  return this.setDrivingBehaviorCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.hasDrivingBehaviorCategory = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional sensoris.protobuf.categories.intersectionattribution.IntersectionAttributionCategory intersection_attribution_category = 6;
 * @return {?proto.sensoris.protobuf.categories.intersectionattribution.IntersectionAttributionCategory}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.getIntersectionAttributionCategory = function() {
  return /** @type{?proto.sensoris.protobuf.categories.intersectionattribution.IntersectionAttributionCategory} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_categories_intersection_attribution_pb.IntersectionAttributionCategory, 6));
};


/**
 * @param {?proto.sensoris.protobuf.categories.intersectionattribution.IntersectionAttributionCategory|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.prototype.setIntersectionAttributionCategory = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.clearIntersectionAttributionCategory = function() {
  return this.setIntersectionAttributionCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.hasIntersectionAttributionCategory = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional sensoris.protobuf.categories.roadattribution.RoadAttributionCategory road_attribution_category = 7;
 * @return {?proto.sensoris.protobuf.categories.roadattribution.RoadAttributionCategory}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.getRoadAttributionCategory = function() {
  return /** @type{?proto.sensoris.protobuf.categories.roadattribution.RoadAttributionCategory} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_categories_road_attribution_pb.RoadAttributionCategory, 7));
};


/**
 * @param {?proto.sensoris.protobuf.categories.roadattribution.RoadAttributionCategory|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.prototype.setRoadAttributionCategory = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.clearRoadAttributionCategory = function() {
  return this.setRoadAttributionCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.hasRoadAttributionCategory = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional sensoris.protobuf.categories.trafficregulation.TrafficRegulationCategory traffic_regulation_category = 8;
 * @return {?proto.sensoris.protobuf.categories.trafficregulation.TrafficRegulationCategory}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.getTrafficRegulationCategory = function() {
  return /** @type{?proto.sensoris.protobuf.categories.trafficregulation.TrafficRegulationCategory} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_categories_traffic_regulation_pb.TrafficRegulationCategory, 8));
};


/**
 * @param {?proto.sensoris.protobuf.categories.trafficregulation.TrafficRegulationCategory|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.prototype.setTrafficRegulationCategory = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.clearTrafficRegulationCategory = function() {
  return this.setTrafficRegulationCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.hasTrafficRegulationCategory = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional sensoris.protobuf.categories.trafficevents.TrafficEventsCategory traffic_events_category = 9;
 * @return {?proto.sensoris.protobuf.categories.trafficevents.TrafficEventsCategory}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.getTrafficEventsCategory = function() {
  return /** @type{?proto.sensoris.protobuf.categories.trafficevents.TrafficEventsCategory} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_categories_traffic_events_pb.TrafficEventsCategory, 9));
};


/**
 * @param {?proto.sensoris.protobuf.categories.trafficevents.TrafficEventsCategory|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.prototype.setTrafficEventsCategory = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.clearTrafficEventsCategory = function() {
  return this.setTrafficEventsCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.hasTrafficEventsCategory = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional sensoris.protobuf.categories.trafficmaneuver.TrafficManeuverCategory traffic_maneuver_category = 10;
 * @return {?proto.sensoris.protobuf.categories.trafficmaneuver.TrafficManeuverCategory}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.getTrafficManeuverCategory = function() {
  return /** @type{?proto.sensoris.protobuf.categories.trafficmaneuver.TrafficManeuverCategory} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_categories_traffic_maneuver_pb.TrafficManeuverCategory, 10));
};


/**
 * @param {?proto.sensoris.protobuf.categories.trafficmaneuver.TrafficManeuverCategory|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.prototype.setTrafficManeuverCategory = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.clearTrafficManeuverCategory = function() {
  return this.setTrafficManeuverCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.hasTrafficManeuverCategory = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional sensoris.protobuf.categories.brake.BrakeCategory brake_category = 11;
 * @return {?proto.sensoris.protobuf.categories.brake.BrakeCategory}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.getBrakeCategory = function() {
  return /** @type{?proto.sensoris.protobuf.categories.brake.BrakeCategory} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_categories_brake_pb.BrakeCategory, 11));
};


/**
 * @param {?proto.sensoris.protobuf.categories.brake.BrakeCategory|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.prototype.setBrakeCategory = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.clearBrakeCategory = function() {
  return this.setBrakeCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.hasBrakeCategory = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional sensoris.protobuf.categories.powertrain.PowertrainCategory powertrain_category = 12;
 * @return {?proto.sensoris.protobuf.categories.powertrain.PowertrainCategory}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.getPowertrainCategory = function() {
  return /** @type{?proto.sensoris.protobuf.categories.powertrain.PowertrainCategory} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_categories_powertrain_pb.PowertrainCategory, 12));
};


/**
 * @param {?proto.sensoris.protobuf.categories.powertrain.PowertrainCategory|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.prototype.setPowertrainCategory = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.clearPowertrainCategory = function() {
  return this.setPowertrainCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.hasPowertrainCategory = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional sensoris.protobuf.categories.map.MapCategory map_category = 13;
 * @return {?proto.sensoris.protobuf.categories.map.MapCategory}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.getMapCategory = function() {
  return /** @type{?proto.sensoris.protobuf.categories.map.MapCategory} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_categories_map_pb.MapCategory, 13));
};


/**
 * @param {?proto.sensoris.protobuf.categories.map.MapCategory|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
*/
proto.sensoris.protobuf.messages.data.EventGroup.prototype.setMapCategory = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup} returns this
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.clearMapCategory = function() {
  return this.setMapCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.EventGroup.prototype.hasMapCategory = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensoris.protobuf.messages.data.DataMessage.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    envelope: (f = msg.getEnvelope()) && proto.sensoris.protobuf.messages.data.DataMessage.Envelope.toObject(includeInstance, f),
    eventGroupList: jspb.Message.toObjectList(msg.getEventGroupList(),
    proto.sensoris.protobuf.messages.data.EventGroup.toObject, includeInstance),
    eventRelationList: jspb.Message.toObjectList(msg.getEventRelationList(),
    proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.toObject, includeInstance),
    eventSourceList: jspb.Message.toObjectList(msg.getEventSourceList(),
    proto.sensoris.protobuf.messages.data.DataMessage.EventSource.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage}
 */
proto.sensoris.protobuf.messages.data.DataMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessage;
  return proto.sensoris.protobuf.messages.data.DataMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage}
 */
proto.sensoris.protobuf.messages.data.DataMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.Envelope;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.Envelope.deserializeBinaryFromReader);
      msg.setEnvelope(value);
      break;
    case 2:
      var value = new proto.sensoris.protobuf.messages.data.EventGroup;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.EventGroup.deserializeBinaryFromReader);
      msg.addEventGroup(value);
      break;
    case 3:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.EventRelation;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.deserializeBinaryFromReader);
      msg.addEventRelation(value);
      break;
    case 4:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.EventSource;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.EventSource.deserializeBinaryFromReader);
      msg.addEventSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvelope();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.Envelope.serializeBinaryToWriter
    );
  }
  f = message.getEventGroupList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sensoris.protobuf.messages.data.EventGroup.serializeBinaryToWriter
    );
  }
  f = message.getEventRelationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.serializeBinaryToWriter
    );
  }
  f = message.getEventSourceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.EventSource.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.toObject = function(includeInstance, msg) {
  var f, obj = {
    pathList: jspb.Message.toObjectList(msg.getPathList(),
    proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths}
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths;
  return proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths}
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.deserializeBinaryFromReader);
      msg.addPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPathList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldNumberList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path}
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path;
  return proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path}
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setFieldNumberList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldNumberList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
};


/**
 * repeated int64 field_number = 1;
 * @return {!Array<number>}
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.prototype.getFieldNumberList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.prototype.setFieldNumberList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.prototype.addFieldNumber = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path.prototype.clearFieldNumberList = function() {
  return this.setFieldNumberList([]);
};


/**
 * repeated Path path = 1;
 * @return {!Array<!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path>}
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.prototype.getPathList = function() {
  return /** @type{!Array<!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path, 1));
};


/**
 * @param {!Array<!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.prototype.setPathList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path}
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.prototype.addPath = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.Path, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.prototype.clearPathList = function() {
  return this.setPathList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensoris.protobuf.messages.data.DataMessage.Paths.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Paths.TypeCase = {
  TYPE_NOT_SET: 0,
  ABSOLUTE_PATHS: 1
};

/**
 * @return {proto.sensoris.protobuf.messages.data.DataMessage.Paths.TypeCase}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Paths.prototype.getTypeCase = function() {
  return /** @type {proto.sensoris.protobuf.messages.data.DataMessage.Paths.TypeCase} */(jspb.Message.computeOneofCase(this, proto.sensoris.protobuf.messages.data.DataMessage.Paths.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Paths.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessage.Paths.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Paths} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Paths.toObject = function(includeInstance, msg) {
  var f, obj = {
    absolutePaths: (f = msg.getAbsolutePaths()) && proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Paths}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Paths.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessage.Paths;
  return proto.sensoris.protobuf.messages.data.DataMessage.Paths.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Paths} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Paths}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Paths.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.deserializeBinaryFromReader);
      msg.setAbsolutePaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Paths.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessage.Paths.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Paths} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Paths.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAbsolutePaths();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths.serializeBinaryToWriter
    );
  }
};


/**
 * optional AbsolutePaths absolute_paths = 1;
 * @return {?proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Paths.prototype.getAbsolutePaths = function() {
  return /** @type{?proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths} */ (
    jspb.Message.getWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths, 1));
};


/**
 * @param {?proto.sensoris.protobuf.messages.data.DataMessage.AbsolutePaths|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Paths} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Paths.prototype.setAbsolutePaths = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sensoris.protobuf.messages.data.DataMessage.Paths.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Paths} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Paths.prototype.clearAbsolutePaths = function() {
  return this.setAbsolutePaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Paths.prototype.hasAbsolutePaths = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.repeatedFields_ = [3,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessage.Envelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    ids: (f = msg.getIds()) && proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.toObject(includeInstance, f),
    fieldResolutionOverrideList: jspb.Message.toObjectList(msg.getFieldResolutionOverrideList(),
    proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.toObject, includeInstance),
    vehicleDimensions: (f = msg.getVehicleDimensions()) && proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.toObject(includeInstance, f),
    mapIdentification: (f = msg.getMapIdentification()) && proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    google_protobuf_any_pb.Any.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessage.Envelope;
  return proto.sensoris.protobuf.messages.data.DataMessage.Envelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.deserializeBinaryFromReader);
      msg.setIds(value);
      break;
    case 3:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.deserializeBinaryFromReader);
      msg.addFieldResolutionOverride(value);
      break;
    case 4:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.deserializeBinaryFromReader);
      msg.setVehicleDimensions(value);
      break;
    case 5:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.deserializeBinaryFromReader);
      msg.setMapIdentification(value);
      break;
    case 15:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessage.Envelope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.serializeBinaryToWriter
    );
  }
  f = message.getFieldResolutionOverrideList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.serializeBinaryToWriter
    );
  }
  f = message.getVehicleDimensions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.serializeBinaryToWriter
    );
  }
  f = message.getMapIdentification();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionId: (f = msg.getSessionId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    messageId: (f = msg.getMessageId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    lastMessageOfSession: (f = msg.getLastMessageOfSession()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    vehicleFleetId: (f = msg.getVehicleFleetId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    vehicleId: (f = msg.getVehicleId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    driverId: (f = msg.getDriverId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids;
  return proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setSessionId(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setMessageId(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setLastMessageOfSession(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setVehicleFleetId(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setVehicleId(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setDriverId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMessageId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getLastMessageOfSession();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getVehicleFleetId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getVehicleId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getDriverId();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue session_id = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.getSessionId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.setSessionId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.clearSessionId = function() {
  return this.setSessionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.hasSessionId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Int64Value message_id = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.getMessageId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.setMessageId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.clearMessageId = function() {
  return this.setMessageId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.hasMessageId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.BoolValue last_message_of_session = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.getLastMessageOfSession = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.setLastMessageOfSession = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.clearLastMessageOfSession = function() {
  return this.setLastMessageOfSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.hasLastMessageOfSession = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue vehicle_fleet_id = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.getVehicleFleetId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.setVehicleFleetId = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.clearVehicleFleetId = function() {
  return this.setVehicleFleetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.hasVehicleFleetId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue vehicle_id = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.getVehicleId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.setVehicleId = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.clearVehicleId = function() {
  return this.setVehicleId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.hasVehicleId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.StringValue driver_id = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.getDriverId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.setDriverId = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.clearDriverId = function() {
  return this.setDriverId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids.prototype.hasDriverId = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.toObject = function(includeInstance, msg) {
  var f, obj = {
    paths: (f = msg.getPaths()) && proto.sensoris.protobuf.messages.data.DataMessage.Paths.toObject(includeInstance, f),
    exponent: (f = msg.getExponent()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride;
  return proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.Paths;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.Paths.deserializeBinaryFromReader);
      msg.setPaths(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setExponent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaths();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.Paths.serializeBinaryToWriter
    );
  }
  f = message.getExponent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional Paths paths = 1;
 * @return {?proto.sensoris.protobuf.messages.data.DataMessage.Paths}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.prototype.getPaths = function() {
  return /** @type{?proto.sensoris.protobuf.messages.data.DataMessage.Paths} */ (
    jspb.Message.getWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.Paths, 1));
};


/**
 * @param {?proto.sensoris.protobuf.messages.data.DataMessage.Paths|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.prototype.setPaths = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.prototype.clearPaths = function() {
  return this.setPaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.prototype.hasPaths = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Int64Value exponent = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.prototype.getExponent = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.prototype.setExponent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.prototype.clearExponent = function() {
  return this.setExponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride.prototype.hasExponent = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.toObject = function(includeInstance, msg) {
  var f, obj = {
    distanceToFront: (f = msg.getDistanceToFront()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    distanceToBack: (f = msg.getDistanceToBack()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    distanceToLeft: (f = msg.getDistanceToLeft()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    distanceToRight: (f = msg.getDistanceToRight()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    distanceToTop: (f = msg.getDistanceToTop()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    distanceToGround: (f = msg.getDistanceToGround()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions;
  return proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setDistanceToFront(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setDistanceToBack(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setDistanceToLeft(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setDistanceToRight(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setDistanceToTop(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setDistanceToGround(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDistanceToFront();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getDistanceToBack();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getDistanceToLeft();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getDistanceToRight();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getDistanceToTop();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getDistanceToGround();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Int64Value distance_to_front = 1;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.getDistanceToFront = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.setDistanceToFront = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.clearDistanceToFront = function() {
  return this.setDistanceToFront(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.hasDistanceToFront = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Int64Value distance_to_back = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.getDistanceToBack = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.setDistanceToBack = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.clearDistanceToBack = function() {
  return this.setDistanceToBack(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.hasDistanceToBack = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int64Value distance_to_left = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.getDistanceToLeft = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.setDistanceToLeft = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.clearDistanceToLeft = function() {
  return this.setDistanceToLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.hasDistanceToLeft = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Int64Value distance_to_right = 4;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.getDistanceToRight = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 4));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.setDistanceToRight = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.clearDistanceToRight = function() {
  return this.setDistanceToRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.hasDistanceToRight = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Int64Value distance_to_top = 5;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.getDistanceToTop = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.setDistanceToTop = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.clearDistanceToTop = function() {
  return this.setDistanceToTop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.hasDistanceToTop = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int64Value distance_to_ground = 6;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.getDistanceToGround = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 6));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.setDistanceToGround = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.clearDistanceToGround = function() {
  return this.setDistanceToGround(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions.prototype.hasDistanceToGround = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.toObject = function(includeInstance, msg) {
  var f, obj = {
    providerVersion: (f = msg.getProviderVersion()) && proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.toObject(includeInstance, f),
    compilerVersion: (f = msg.getCompilerVersion()) && proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.toObject(includeInstance, f),
    format: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification;
  return proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.deserializeBinaryFromReader);
      msg.setProviderVersion(value);
      break;
    case 2:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.deserializeBinaryFromReader);
      msg.setCompilerVersion(value);
      break;
    case 3:
      var value = /** @type {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.Format} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProviderVersion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.serializeBinaryToWriter
    );
  }
  f = message.getCompilerVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.serializeBinaryToWriter
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.Format = {
  UNKNOWN_FORMAT: 0,
  OTHER: 1,
  NDS: 2
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: (f = msg.getSource()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && sensoris_protobuf_types_base_pb.Version.toObject(includeInstance, f),
    extractionTimestamp: (f = msg.getExtractionTimestamp()) && sensoris_protobuf_types_base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion;
  return proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 2:
      var value = new sensoris_protobuf_types_base_pb.Version;
      reader.readMessage(value,sensoris_protobuf_types_base_pb.Version.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new sensoris_protobuf_types_base_pb.Timestamp;
      reader.readMessage(value,sensoris_protobuf_types_base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExtractionTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sensoris_protobuf_types_base_pb.Version.serializeBinaryToWriter
    );
  }
  f = message.getExtractionTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      sensoris_protobuf_types_base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue source = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.getSource = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.hasSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sensoris.protobuf.types.base.Version version = 2;
 * @return {?proto.sensoris.protobuf.types.base.Version}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.getVersion = function() {
  return /** @type{?proto.sensoris.protobuf.types.base.Version} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_types_base_pb.Version, 2));
};


/**
 * @param {?proto.sensoris.protobuf.types.base.Version|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional sensoris.protobuf.types.base.Timestamp extraction_timestamp = 3;
 * @return {?proto.sensoris.protobuf.types.base.Timestamp}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.getExtractionTimestamp = function() {
  return /** @type{?proto.sensoris.protobuf.types.base.Timestamp} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_types_base_pb.Timestamp, 3));
};


/**
 * @param {?proto.sensoris.protobuf.types.base.Timestamp|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.setExtractionTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.clearExtractionTimestamp = function() {
  return this.setExtractionTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion.prototype.hasExtractionTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MapVersion provider_version = 1;
 * @return {?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.prototype.getProviderVersion = function() {
  return /** @type{?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion} */ (
    jspb.Message.getWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion, 1));
};


/**
 * @param {?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.prototype.setProviderVersion = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.prototype.clearProviderVersion = function() {
  return this.setProviderVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.prototype.hasProviderVersion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MapVersion compiler_version = 2;
 * @return {?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.prototype.getCompilerVersion = function() {
  return /** @type{?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion} */ (
    jspb.Message.getWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion, 2));
};


/**
 * @param {?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.MapVersion|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.prototype.setCompilerVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.prototype.clearCompilerVersion = function() {
  return this.setCompilerVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.prototype.hasCompilerVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Format format = 3;
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.Format}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.prototype.getFormat = function() {
  return /** @type {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.Format} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.Format} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Ids ids = 1;
 * @return {?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.getIds = function() {
  return /** @type{?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids} */ (
    jspb.Message.getWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids, 1));
};


/**
 * @param {?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.Ids|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.setIds = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.clearIds = function() {
  return this.setIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.hasIds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated FieldResolutionOverride field_resolution_override = 3;
 * @return {!Array<!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride>}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.getFieldResolutionOverrideList = function() {
  return /** @type{!Array<!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride, 3));
};


/**
 * @param {!Array<!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.setFieldResolutionOverrideList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.addFieldResolutionOverride = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sensoris.protobuf.messages.data.DataMessage.Envelope.FieldResolutionOverride, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.clearFieldResolutionOverrideList = function() {
  return this.setFieldResolutionOverrideList([]);
};


/**
 * optional VehicleDimensions vehicle_dimensions = 4;
 * @return {?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.getVehicleDimensions = function() {
  return /** @type{?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions} */ (
    jspb.Message.getWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions, 4));
};


/**
 * @param {?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.VehicleDimensions|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.setVehicleDimensions = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.clearVehicleDimensions = function() {
  return this.setVehicleDimensions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.hasVehicleDimensions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MapIdentification map_identification = 5;
 * @return {?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.getMapIdentification = function() {
  return /** @type{?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification} */ (
    jspb.Message.getWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification, 5));
};


/**
 * @param {?proto.sensoris.protobuf.messages.data.DataMessage.Envelope.MapIdentification|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.setMapIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.clearMapIdentification = function() {
  return this.setMapIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.hasMapIdentification = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated google.protobuf.Any extension = 15;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 15));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.Envelope} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.Envelope.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.repeatedFields_ = [1,3,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromIdList: jspb.Message.toObjectList(msg.getFromIdList(),
    google_protobuf_wrappers_pb.Int64Value.toObject, includeInstance),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    toIdList: jspb.Message.toObjectList(msg.getToIdList(),
    google_protobuf_wrappers_pb.Int64Value.toObject, includeInstance),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    google_protobuf_any_pb.Any.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessage.EventRelation;
  return proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.addFromId(value);
      break;
    case 2:
      var value = /** @type {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.addToId(value);
      break;
    case 15:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromIdList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getToIdList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.Type = {
  UNKNOWN_TYPE: 0,
  EQUAL: 1,
  GROUP: 2,
  CONTAIN: 3,
  IMPACT: 4,
  START_AT: 5,
  END_AT: 6,
  LEFT_OF: 7,
  RIGHT_OF: 8,
  TRIGGERED_BY: 9,
  DERIVED_FROM: 11,
  MAP_REFERENCE: 12
};

/**
 * repeated google.protobuf.Int64Value from_id = 1;
 * @return {!Array<!proto.google.protobuf.Int64Value>}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.getFromIdList = function() {
  return /** @type{!Array<!proto.google.protobuf.Int64Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.Int64Value>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.setFromIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.Int64Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Int64Value}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.addFromId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.Int64Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.clearFromIdList = function() {
  return this.setFromIdList([]);
};


/**
 * optional Type type = 2;
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.Type}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.getType = function() {
  return /** @type {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.Type} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated google.protobuf.Int64Value to_id = 3;
 * @return {!Array<!proto.google.protobuf.Int64Value>}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.getToIdList = function() {
  return /** @type{!Array<!proto.google.protobuf.Int64Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {!Array<!proto.google.protobuf.Int64Value>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.setToIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.protobuf.Int64Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Int64Value}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.addToId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.protobuf.Int64Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.clearToIdList = function() {
  return this.setToIdList([]);
};


/**
 * repeated google.protobuf.Any extension = 15;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 15));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventRelation.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.repeatedFields_ = [15];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventReferenceCase = {
  EVENT_REFERENCE_NOT_SET: 0,
  IDS: 2,
  PATHS: 3
};

/**
 * @return {proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventReferenceCase}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.getEventReferenceCase = function() {
  return /** @type {proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventReferenceCase} */(jspb.Message.computeOneofCase(this, proto.sensoris.protobuf.messages.data.DataMessage.EventSource.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessage.EventSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: (f = msg.getSource()) && sensoris_protobuf_types_source_pb.Source.toObject(includeInstance, f),
    ids: (f = msg.getIds()) && proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.toObject(includeInstance, f),
    paths: (f = msg.getPaths()) && proto.sensoris.protobuf.messages.data.DataMessage.Paths.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    google_protobuf_any_pb.Any.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessage.EventSource;
  return proto.sensoris.protobuf.messages.data.DataMessage.EventSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sensoris_protobuf_types_source_pb.Source;
      reader.readMessage(value,sensoris_protobuf_types_source_pb.Source.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 2:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.deserializeBinaryFromReader);
      msg.setIds(value);
      break;
    case 3:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage.Paths;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.Paths.deserializeBinaryFromReader);
      msg.setPaths(value);
      break;
    case 15:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessage.EventSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sensoris_protobuf_types_source_pb.Source.serializeBinaryToWriter
    );
  }
  f = message.getIds();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.serializeBinaryToWriter
    );
  }
  f = message.getPaths();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.Paths.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.toObject = function(includeInstance, msg) {
  var f, obj = {
    idList: jspb.Message.toObjectList(msg.getIdList(),
    google_protobuf_wrappers_pb.Int64Value.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds;
  return proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.addId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.protobuf.Int64Value id = 2;
 * @return {!Array<!proto.google.protobuf.Int64Value>}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.prototype.getIdList = function() {
  return /** @type{!Array<!proto.google.protobuf.Int64Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/**
 * @param {!Array<!proto.google.protobuf.Int64Value>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.prototype.setIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.Int64Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Int64Value}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.prototype.addId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.Int64Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds.prototype.clearIdList = function() {
  return this.setIdList([]);
};


/**
 * optional sensoris.protobuf.types.source.Source source = 1;
 * @return {?proto.sensoris.protobuf.types.source.Source}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.getSource = function() {
  return /** @type{?proto.sensoris.protobuf.types.source.Source} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_types_source_pb.Source, 1));
};


/**
 * @param {?proto.sensoris.protobuf.types.source.Source|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.hasSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EventEnvelopeIds ids = 2;
 * @return {?proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.getIds = function() {
  return /** @type{?proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds} */ (
    jspb.Message.getWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds, 2));
};


/**
 * @param {?proto.sensoris.protobuf.messages.data.DataMessage.EventSource.EventEnvelopeIds|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.setIds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.sensoris.protobuf.messages.data.DataMessage.EventSource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.clearIds = function() {
  return this.setIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.hasIds = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Paths paths = 3;
 * @return {?proto.sensoris.protobuf.messages.data.DataMessage.Paths}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.getPaths = function() {
  return /** @type{?proto.sensoris.protobuf.messages.data.DataMessage.Paths} */ (
    jspb.Message.getWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.Paths, 3));
};


/**
 * @param {?proto.sensoris.protobuf.messages.data.DataMessage.Paths|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.setPaths = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.sensoris.protobuf.messages.data.DataMessage.EventSource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.clearPaths = function() {
  return this.setPaths(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.hasPaths = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated google.protobuf.Any extension = 15;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 15));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.EventSource.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * optional Envelope envelope = 1;
 * @return {?proto.sensoris.protobuf.messages.data.DataMessage.Envelope}
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.getEnvelope = function() {
  return /** @type{?proto.sensoris.protobuf.messages.data.DataMessage.Envelope} */ (
    jspb.Message.getWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.Envelope, 1));
};


/**
 * @param {?proto.sensoris.protobuf.messages.data.DataMessage.Envelope|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.prototype.setEnvelope = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.clearEnvelope = function() {
  return this.setEnvelope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.hasEnvelope = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated EventGroup event_group = 2;
 * @return {!Array<!proto.sensoris.protobuf.messages.data.EventGroup>}
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.getEventGroupList = function() {
  return /** @type{!Array<!proto.sensoris.protobuf.messages.data.EventGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensoris.protobuf.messages.data.EventGroup, 2));
};


/**
 * @param {!Array<!proto.sensoris.protobuf.messages.data.EventGroup>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.prototype.setEventGroupList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sensoris.protobuf.messages.data.EventGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensoris.protobuf.messages.data.EventGroup}
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.addEventGroup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sensoris.protobuf.messages.data.EventGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.clearEventGroupList = function() {
  return this.setEventGroupList([]);
};


/**
 * repeated EventRelation event_relation = 3;
 * @return {!Array<!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation>}
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.getEventRelationList = function() {
  return /** @type{!Array<!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.EventRelation, 3));
};


/**
 * @param {!Array<!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.prototype.setEventRelationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventRelation}
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.addEventRelation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sensoris.protobuf.messages.data.DataMessage.EventRelation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.clearEventRelationList = function() {
  return this.setEventRelationList([]);
};


/**
 * repeated EventSource event_source = 4;
 * @return {!Array<!proto.sensoris.protobuf.messages.data.DataMessage.EventSource>}
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.getEventSourceList = function() {
  return /** @type{!Array<!proto.sensoris.protobuf.messages.data.DataMessage.EventSource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage.EventSource, 4));
};


/**
 * @param {!Array<!proto.sensoris.protobuf.messages.data.DataMessage.EventSource>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessage.prototype.setEventSourceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage.EventSource}
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.addEventSource = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sensoris.protobuf.messages.data.DataMessage.EventSource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessage.prototype.clearEventSourceList = function() {
  return this.setEventSourceList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensoris.protobuf.messages.data.DataMessages.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessages.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessages.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessages} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessages.toObject = function(includeInstance, msg) {
  var f, obj = {
    envelope: (f = msg.getEnvelope()) && proto.sensoris.protobuf.messages.data.DataMessages.Envelope.toObject(includeInstance, f),
    dataMessageList: jspb.Message.toObjectList(msg.getDataMessageList(),
    proto.sensoris.protobuf.messages.data.DataMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages}
 */
proto.sensoris.protobuf.messages.data.DataMessages.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessages;
  return proto.sensoris.protobuf.messages.data.DataMessages.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessages} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages}
 */
proto.sensoris.protobuf.messages.data.DataMessages.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensoris.protobuf.messages.data.DataMessages.Envelope;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessages.Envelope.deserializeBinaryFromReader);
      msg.setEnvelope(value);
      break;
    case 2:
      var value = new proto.sensoris.protobuf.messages.data.DataMessage;
      reader.readMessage(value,proto.sensoris.protobuf.messages.data.DataMessage.deserializeBinaryFromReader);
      msg.addDataMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessages.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessages.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessages} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessages.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvelope();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensoris.protobuf.messages.data.DataMessages.Envelope.serializeBinaryToWriter
    );
  }
  f = message.getDataMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sensoris.protobuf.messages.data.DataMessage.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.repeatedFields_ = [2,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.messages.data.DataMessages.Envelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.messages.data.DataMessages.Envelope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getVersion()) && sensoris_protobuf_types_base_pb.Version.toObject(includeInstance, f),
    submitterList: jspb.Message.toObjectList(msg.getSubmitterList(),
    sensoris_protobuf_types_base_pb.Entity.toObject, includeInstance),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    google_protobuf_any_pb.Any.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages.Envelope}
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.messages.data.DataMessages.Envelope;
  return proto.sensoris.protobuf.messages.data.DataMessages.Envelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessages.Envelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages.Envelope}
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sensoris_protobuf_types_base_pb.Version;
      reader.readMessage(value,sensoris_protobuf_types_base_pb.Version.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 2:
      var value = new sensoris_protobuf_types_base_pb.Entity;
      reader.readMessage(value,sensoris_protobuf_types_base_pb.Entity.deserializeBinaryFromReader);
      msg.addSubmitter(value);
      break;
    case 15:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.messages.data.DataMessages.Envelope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.messages.data.DataMessages.Envelope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sensoris_protobuf_types_base_pb.Version.serializeBinaryToWriter
    );
  }
  f = message.getSubmitterList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      sensoris_protobuf_types_base_pb.Entity.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional sensoris.protobuf.types.base.Version version = 1;
 * @return {?proto.sensoris.protobuf.types.base.Version}
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.getVersion = function() {
  return /** @type{?proto.sensoris.protobuf.types.base.Version} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_types_base_pb.Version, 1));
};


/**
 * @param {?proto.sensoris.protobuf.types.base.Version|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages.Envelope} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages.Envelope} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated sensoris.protobuf.types.base.Entity submitter = 2;
 * @return {!Array<!proto.sensoris.protobuf.types.base.Entity>}
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.getSubmitterList = function() {
  return /** @type{!Array<!proto.sensoris.protobuf.types.base.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, sensoris_protobuf_types_base_pb.Entity, 2));
};


/**
 * @param {!Array<!proto.sensoris.protobuf.types.base.Entity>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages.Envelope} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.setSubmitterList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sensoris.protobuf.types.base.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensoris.protobuf.types.base.Entity}
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.addSubmitter = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sensoris.protobuf.types.base.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages.Envelope} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.clearSubmitterList = function() {
  return this.setSubmitterList([]);
};


/**
 * repeated google.protobuf.Any extension = 15;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 15));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages.Envelope} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages.Envelope} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessages.Envelope.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * optional Envelope envelope = 1;
 * @return {?proto.sensoris.protobuf.messages.data.DataMessages.Envelope}
 */
proto.sensoris.protobuf.messages.data.DataMessages.prototype.getEnvelope = function() {
  return /** @type{?proto.sensoris.protobuf.messages.data.DataMessages.Envelope} */ (
    jspb.Message.getWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessages.Envelope, 1));
};


/**
 * @param {?proto.sensoris.protobuf.messages.data.DataMessages.Envelope|undefined} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessages.prototype.setEnvelope = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessages.prototype.clearEnvelope = function() {
  return this.setEnvelope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.messages.data.DataMessages.prototype.hasEnvelope = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated DataMessage data_message = 2;
 * @return {!Array<!proto.sensoris.protobuf.messages.data.DataMessage>}
 */
proto.sensoris.protobuf.messages.data.DataMessages.prototype.getDataMessageList = function() {
  return /** @type{!Array<!proto.sensoris.protobuf.messages.data.DataMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensoris.protobuf.messages.data.DataMessage, 2));
};


/**
 * @param {!Array<!proto.sensoris.protobuf.messages.data.DataMessage>} value
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages} returns this
*/
proto.sensoris.protobuf.messages.data.DataMessages.prototype.setDataMessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sensoris.protobuf.messages.data.DataMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensoris.protobuf.messages.data.DataMessage}
 */
proto.sensoris.protobuf.messages.data.DataMessages.prototype.addDataMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sensoris.protobuf.messages.data.DataMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.messages.data.DataMessages} returns this
 */
proto.sensoris.protobuf.messages.data.DataMessages.prototype.clearDataMessageList = function() {
  return this.setDataMessageList([]);
};


goog.object.extend(exports, proto.sensoris.protobuf.messages.data);
