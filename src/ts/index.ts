import { default as rp } from 'request-promise-native';

import * as eventsMapping from '../../mapping/srti-mapping.json';
import * as settings from '../../settings.json';

import { default as minimist } from 'minimist';
import { DataIngester } from './data-ingester';

const args = minimist(process.argv.slice(2));

if (!args._) {
    console.log('Usage: node index.js setup|ingest|truncate [n days]');
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

const truncateIndex = (days?: number) => {
    rp(settings.esUrl + '/events').then(res => {

        let query;
        if (!days) {
            query = {
                query: {
                    match_all: {}
                }
            };
        } else {
            let d = new Date();
            d.setDate(d.getDate() - days);

            const maxDate = d.toISOString().slice(0,10);
            console.log('removing data before:', maxDate);
            query = {
                query: {
                    range : {
                        timeStart : {
                            lte : maxDate
                        }
                    }
                }
            };
        }
        let options = {
            method: 'POST',
            uri: settings.esUrl + '/events/_delete_by_query?conflicts=proceed',
            body: query,
            json: true // Automatically stringifies the body to JSON
        };

        console.log('Truncating index. This can take a while.');
        rp(options).then(res => {
            console.log('Index truncated. response:', res);
        }, err => {
            console.error(err);
        });
    }, err => {
        console.log('index "events" does not exist');
    });

};


if (args._.indexOf('ingest') >= 0) {
    console.log('Starting ingestion');
    ingest();
} else if (args._.indexOf('setup') >= 0) {
    console.log('Setting up Elasticsearch');
    setup();
} else if (args._.indexOf('truncate') >= 0) {
    console.log('Truncating Elasticsearch index', args);

    let days;
    if (args._.length > 1) {
        days = args._[1];
    }

    truncateIndex(days);
} else {
    console.log('Usage: node index.js setup|ingest|truncate');
    process.exit(1);
}
