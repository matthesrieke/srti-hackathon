#!/bin/sh

protoc  --proto_path=src --js_out=import_style=commonjs,binary:lib src/proto/sensoris/protobuf/categories/* src/proto/sensoris/protobuf/messages/* src/proto/sensoris/protobuf/types/*
