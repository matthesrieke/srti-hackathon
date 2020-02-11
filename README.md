# SRTI Data Ingester

## Setup and Configuration

1. `npm install`
2. Configure.

Config is done in `settings.json`:

* `baseDir` defines the directory to look for `*.proto` files
* `esUrl` base URL of the Elasticsearch instance

## Elasticsearch Setup

1. Make Elasticsearch available (see "Configuration")
1. `npm start setup`

## Data Ingestion

The application harvests all `*.proto` files of the defined
data directory (see "Configuration").

1. `npm start ingest`

### Custom Method

The `message-parser.ts` provides a `parseByteData()` method
which can be used for custom ingestion workflows.

## Truncating Data

1. `npm start truncate`

### Older Than Days

Truncates data that is older than `n` days.

1. `npm start truncate 7`

## Kibana

Kibana can be used to visualize the data. Some visualizations and a dashboard
can be imported from the file `elasticsearch/kibana-vis-dashboard.json`.
