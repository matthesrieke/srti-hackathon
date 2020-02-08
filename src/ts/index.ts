import fs from 'fs';
import { default as rp } from 'request-promise-native';

import * as eventsMapping from '../../mapping/srti-mapping.json';
import * as settings from '../../settings.json';

import { default as minimist } from 'minimist';
import { DataIngester } from './data-ingester.js';

const args = minimist(process.argv.slice(2));

if (!args._) {
    console.log('Usage: node index.js setup|ingest');
    process.exit(1);
}

const ingest = () => {
    new DataIngester(settings.baseDir, settings.esUrl).startIngestion();
};

const setup = () => {
    rp(settings.esUrl + '/events').then(res => console.log('index "events" already exists'), err => {
        let options = {
            method: 'PUT',
            uri: settings.esUrl + '/events',
            body: eventsMapping,
            json: true // Automatically stringifies the body to JSON
        };

        rp(options).then(res => {
            console.log('response:', res);
        }, err => {
            console.error(err);
        });
    });

};


if (args._.indexOf('ingest') >= 0) {
    console.log('Starting ingestion');
    ingest();
} else if (args._.indexOf('setup') >= 0) {
    console.log('Setting up Elasticsearch');
    setup();
} else {
    console.log('Usage: node index.js setup|ingest');
    process.exit(1);
}
