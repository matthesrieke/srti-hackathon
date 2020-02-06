# SENSORIS Specification

The **Sensor Interface Specification (SENSORIS)** defines an interface for requesting and sending vehicle sensor data from vehicles to clouds and across clouds. The specification and its standardization focus on the content and encoding of the interface.

For more information please visit the [SENSORIS webpage](http://sensor-is.org/). 

# License Reasoning

SENSORIS specifications will be handled through a dual license model. Every release will be first released internally to the members of SENSORIS under a SENSORIS license. As SENSORIS is committed to be open to the public, all schemas and documentation will be published after a 12 month retention period to the public under the [Creative Commons Attribution-NoDerivatives 4.0 International license](https://creativecommons.org/licenses/by-nd/4.0/legalcode). The published package under this license also contains HTML-documentation as well as the schema description in Google Protocol Buffers (protobuf) language.

What is allowed to do:
-	Download the schema from the website.
-	Compile a protobuf library using the openly available protobuf compiler.
-	Use the protobuf library to implement any software that encodes or decodes SENSORIS messages.
-	Define proprietary (non-standardized) Any-extensions.
-	Use SENSORIS and your proprietary extensions even commercially between non-member to non-member business cases.
-	You can join the consortium and contribute.

What is not allowed to do:
-	Change the protobuf schema and distribute it to third parties under any name (SENSORIS or other) to exchange data.
Please review the referred license for the exact description of the rights and obligations related to the use of the SENSORIS schemas and documentation. 

# Expert Groups

Category | Lead | Participants 
------------------|------|-------------
Positioning, Localization | TomTom | Bosch, Daimler, HERE
Object detection | Continental | Bosch, Ertico, TomTom
Weather | INRIX | Bosch, TomTom
Parking | INRIX | Bosch, HERE, TomTom
Lane | Continental | Bosch, Daimler, HERE, TomTom, Volvo
Traffic | INRIX | Bosch, HERE, TomTom
Traffic | INRIX | Bosch, HERE, TomTom
Traffic signs | Daimler | Bosch, Continental, HERE, TomTom
Traffic signals | Continental | Bosch
Brake | Bosch | INRIX, HERE
Powertrain | Volvo | Continental
Map models | TomTom | HERE

# Protobuf

The SENSORIS specification uses [Google Protocol Buffers](https://developers.google.com/protocol-buffers/) (protobuf) version 3 for message encoding. The SENSORIS protobuf schemas are located in the src directory.

To compile the SENSORIS protobuf schemas for target languages, e.g. C++ and Java, some steps are required which are described below for a Linux based system.

First, download the [protoc compiler](https://github.com/google/protobuf/releases/tag/v3.5.1) for the target system and unzip it.

```bash
wget https://github.com/google/protobuf/releases/download/v3.5.1/protoc-3.5.1-linux-x86_64.zip
unzip protoc-3.5.1-linux-x86_64.zip -d protobuf
```

Then clone the SENSORIS specification from GitHub and checkout the desired Git branch, e.g. feature/localization-category.

```bash
git clone https://github.com/sensoris/specification.git
cd specification
git checkout feature/localization-category
cd ..
```

The protobuf compiler requires that the output directories for the generated sources exist, e.g. for C++ and Java.

```bash
mkdir specification-cpp specification-java
```

Finally, run the protobuf compiler to generate the sources for C++ and Java. For protoc all protobuf files have to be listed individually, which is automatically done by the find command.

```bash
protobuf/bin/protoc --cpp_out=specification-cpp --java_out=specification-java --proto_path=specification/src $(find specification -name '*.proto' -printf "%p ")
```

For reference the expanded version of the protobuf compiler call is listed below.

```bash
protobuf/bin/protoc --cpp_out=specification-cpp --java_out=specification-java --proto_path=specification/src specification/src/sensoris/protobuf/types/base.proto specification/src/sensoris/protobuf/types/source.proto specification/src/sensoris/protobuf/types/spatial.proto specification/src/sensoris/protobuf/messages/data.proto specification/src/sensoris/protobuf/categories/traffic_regulation.proto specification/src/sensoris/protobuf/categories/map.proto specification/src/sensoris/protobuf/categories/brake.proto specification/src/sensoris/protobuf/categories/weather.proto specification/src/sensoris/protobuf/categories/intersection_attribution.proto specification/src/sensoris/protobuf/categories/traffic_events.proto specification/src/sensoris/protobuf/categories/traffic_maneuver.proto specification/src/sensoris/protobuf/categories/localization.proto specification/src/sensoris/protobuf/categories/driving_behavior.proto specification/src/sensoris/protobuf/categories/powertrain.proto specification/src/sensoris/protobuf/categories/object_detection.proto specification/src/sensoris/protobuf/categories/road_attribution.proto
```

The generated source files for C++ and Java are created in the respective directories, e.g. specification-cpp and specification-java.
