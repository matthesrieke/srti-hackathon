#!/bin/sh

protoc  --proto_path=src --js_out=import_style=commonjs,binary:lib src/sensoris/protobuf/categories/* src/sensoris/protobuf/messages/* src/sensoris/protobuf/types/*
