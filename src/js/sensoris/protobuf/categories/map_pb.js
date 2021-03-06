// source: sensoris/protobuf/categories/map.proto
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

var sensoris_protobuf_types_base_pb = require('../../../sensoris/protobuf/types/base_pb.js');
goog.object.extend(proto, sensoris_protobuf_types_base_pb);
var sensoris_protobuf_types_spatial_pb = require('../../../sensoris/protobuf/types/spatial_pb.js');
goog.object.extend(proto, sensoris_protobuf_types_spatial_pb);
goog.exportSymbol('proto.sensoris.protobuf.categories.map.MapCategory', null, global);
goog.exportSymbol('proto.sensoris.protobuf.categories.map.MapReference', null, global);
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
proto.sensoris.protobuf.categories.map.MapReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensoris.protobuf.categories.map.MapReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.categories.map.MapReference.displayName = 'proto.sensoris.protobuf.categories.map.MapReference';
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
proto.sensoris.protobuf.categories.map.MapCategory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensoris.protobuf.categories.map.MapCategory.repeatedFields_, null);
};
goog.inherits(proto.sensoris.protobuf.categories.map.MapCategory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensoris.protobuf.categories.map.MapCategory.displayName = 'proto.sensoris.protobuf.categories.map.MapCategory';
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
proto.sensoris.protobuf.categories.map.MapReference.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.categories.map.MapReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.categories.map.MapReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.categories.map.MapReference.toObject = function(includeInstance, msg) {
  var f, obj = {
    envelope: (f = msg.getEnvelope()) && sensoris_protobuf_types_base_pb.EventEnvelope.toObject(includeInstance, f),
    locationReference: (f = msg.getLocationReference()) && sensoris_protobuf_types_spatial_pb.MapLocationReference.toObject(includeInstance, f)
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
 * @return {!proto.sensoris.protobuf.categories.map.MapReference}
 */
proto.sensoris.protobuf.categories.map.MapReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.categories.map.MapReference;
  return proto.sensoris.protobuf.categories.map.MapReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.categories.map.MapReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.categories.map.MapReference}
 */
proto.sensoris.protobuf.categories.map.MapReference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sensoris_protobuf_types_base_pb.EventEnvelope;
      reader.readMessage(value,sensoris_protobuf_types_base_pb.EventEnvelope.deserializeBinaryFromReader);
      msg.setEnvelope(value);
      break;
    case 2:
      var value = new sensoris_protobuf_types_spatial_pb.MapLocationReference;
      reader.readMessage(value,sensoris_protobuf_types_spatial_pb.MapLocationReference.deserializeBinaryFromReader);
      msg.setLocationReference(value);
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
proto.sensoris.protobuf.categories.map.MapReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.categories.map.MapReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.categories.map.MapReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.categories.map.MapReference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvelope();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sensoris_protobuf_types_base_pb.EventEnvelope.serializeBinaryToWriter
    );
  }
  f = message.getLocationReference();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sensoris_protobuf_types_spatial_pb.MapLocationReference.serializeBinaryToWriter
    );
  }
};


/**
 * optional sensoris.protobuf.types.base.EventEnvelope envelope = 1;
 * @return {?proto.sensoris.protobuf.types.base.EventEnvelope}
 */
proto.sensoris.protobuf.categories.map.MapReference.prototype.getEnvelope = function() {
  return /** @type{?proto.sensoris.protobuf.types.base.EventEnvelope} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_types_base_pb.EventEnvelope, 1));
};


/**
 * @param {?proto.sensoris.protobuf.types.base.EventEnvelope|undefined} value
 * @return {!proto.sensoris.protobuf.categories.map.MapReference} returns this
*/
proto.sensoris.protobuf.categories.map.MapReference.prototype.setEnvelope = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.categories.map.MapReference} returns this
 */
proto.sensoris.protobuf.categories.map.MapReference.prototype.clearEnvelope = function() {
  return this.setEnvelope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.categories.map.MapReference.prototype.hasEnvelope = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sensoris.protobuf.types.spatial.MapLocationReference location_reference = 2;
 * @return {?proto.sensoris.protobuf.types.spatial.MapLocationReference}
 */
proto.sensoris.protobuf.categories.map.MapReference.prototype.getLocationReference = function() {
  return /** @type{?proto.sensoris.protobuf.types.spatial.MapLocationReference} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_types_spatial_pb.MapLocationReference, 2));
};


/**
 * @param {?proto.sensoris.protobuf.types.spatial.MapLocationReference|undefined} value
 * @return {!proto.sensoris.protobuf.categories.map.MapReference} returns this
*/
proto.sensoris.protobuf.categories.map.MapReference.prototype.setLocationReference = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.categories.map.MapReference} returns this
 */
proto.sensoris.protobuf.categories.map.MapReference.prototype.clearLocationReference = function() {
  return this.setLocationReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.categories.map.MapReference.prototype.hasLocationReference = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensoris.protobuf.categories.map.MapCategory.repeatedFields_ = [2];



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
proto.sensoris.protobuf.categories.map.MapCategory.prototype.toObject = function(opt_includeInstance) {
  return proto.sensoris.protobuf.categories.map.MapCategory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensoris.protobuf.categories.map.MapCategory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.categories.map.MapCategory.toObject = function(includeInstance, msg) {
  var f, obj = {
    envelope: (f = msg.getEnvelope()) && sensoris_protobuf_types_base_pb.CategoryEnvelope.toObject(includeInstance, f),
    mapReferenceList: jspb.Message.toObjectList(msg.getMapReferenceList(),
    proto.sensoris.protobuf.categories.map.MapReference.toObject, includeInstance)
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
 * @return {!proto.sensoris.protobuf.categories.map.MapCategory}
 */
proto.sensoris.protobuf.categories.map.MapCategory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensoris.protobuf.categories.map.MapCategory;
  return proto.sensoris.protobuf.categories.map.MapCategory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensoris.protobuf.categories.map.MapCategory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensoris.protobuf.categories.map.MapCategory}
 */
proto.sensoris.protobuf.categories.map.MapCategory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sensoris_protobuf_types_base_pb.CategoryEnvelope;
      reader.readMessage(value,sensoris_protobuf_types_base_pb.CategoryEnvelope.deserializeBinaryFromReader);
      msg.setEnvelope(value);
      break;
    case 2:
      var value = new proto.sensoris.protobuf.categories.map.MapReference;
      reader.readMessage(value,proto.sensoris.protobuf.categories.map.MapReference.deserializeBinaryFromReader);
      msg.addMapReference(value);
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
proto.sensoris.protobuf.categories.map.MapCategory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensoris.protobuf.categories.map.MapCategory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensoris.protobuf.categories.map.MapCategory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensoris.protobuf.categories.map.MapCategory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvelope();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sensoris_protobuf_types_base_pb.CategoryEnvelope.serializeBinaryToWriter
    );
  }
  f = message.getMapReferenceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sensoris.protobuf.categories.map.MapReference.serializeBinaryToWriter
    );
  }
};


/**
 * optional sensoris.protobuf.types.base.CategoryEnvelope envelope = 1;
 * @return {?proto.sensoris.protobuf.types.base.CategoryEnvelope}
 */
proto.sensoris.protobuf.categories.map.MapCategory.prototype.getEnvelope = function() {
  return /** @type{?proto.sensoris.protobuf.types.base.CategoryEnvelope} */ (
    jspb.Message.getWrapperField(this, sensoris_protobuf_types_base_pb.CategoryEnvelope, 1));
};


/**
 * @param {?proto.sensoris.protobuf.types.base.CategoryEnvelope|undefined} value
 * @return {!proto.sensoris.protobuf.categories.map.MapCategory} returns this
*/
proto.sensoris.protobuf.categories.map.MapCategory.prototype.setEnvelope = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sensoris.protobuf.categories.map.MapCategory} returns this
 */
proto.sensoris.protobuf.categories.map.MapCategory.prototype.clearEnvelope = function() {
  return this.setEnvelope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensoris.protobuf.categories.map.MapCategory.prototype.hasEnvelope = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated MapReference map_reference = 2;
 * @return {!Array<!proto.sensoris.protobuf.categories.map.MapReference>}
 */
proto.sensoris.protobuf.categories.map.MapCategory.prototype.getMapReferenceList = function() {
  return /** @type{!Array<!proto.sensoris.protobuf.categories.map.MapReference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensoris.protobuf.categories.map.MapReference, 2));
};


/**
 * @param {!Array<!proto.sensoris.protobuf.categories.map.MapReference>} value
 * @return {!proto.sensoris.protobuf.categories.map.MapCategory} returns this
*/
proto.sensoris.protobuf.categories.map.MapCategory.prototype.setMapReferenceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sensoris.protobuf.categories.map.MapReference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensoris.protobuf.categories.map.MapReference}
 */
proto.sensoris.protobuf.categories.map.MapCategory.prototype.addMapReference = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sensoris.protobuf.categories.map.MapReference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensoris.protobuf.categories.map.MapCategory} returns this
 */
proto.sensoris.protobuf.categories.map.MapCategory.prototype.clearMapReferenceList = function() {
  return this.setMapReferenceList([]);
};


goog.object.extend(exports, proto.sensoris.protobuf.categories.map);
