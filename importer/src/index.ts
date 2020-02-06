import fs from 'fs';
import { ProjectParser } from './project-parser';
import { ComponentParser } from './component-parser';
import { default as rp } from 'request-promise-native';

import * as eventsMapping from '../data/srti-mapping.json';

import { default as minimist } from 'minimist';

const args = minimist(process.argv.slice(2));
// const esUrl = esUrl + '';
const esUrl = 'http://localhost:9200';

if (!args._) {
    console.log('Usage: node index.js setup|ingest');
    process.exit(1);
}

const ingest = () => {
    fs.readdir('./data', (err, files) => {
        if (err) {
            console.error(err);
        } else {
            files.forEach(f => {
                if (f.endsWith('projektsteckbrief.csv')) {
                    const parser = new ProjectParser();
                    parser.parseFromCsv('./data/' + f).then(projects => {
                        projects.forEach(p => {
                            let options = {
                                method: 'PUT',
                                uri: esUrl + '/projects/_doc/' + p.id,
                                body: p,
                                json: true // Automatically stringifies the body to JSON
                            };
                            
                            rp(options).then(res => {
                                console.log('document created:', res);
                            }, err => {
                                console.error(err);
                            });
                        });
                    });
                }
                if (f.endsWith('komponentensteckbrief.csv')) {
                    const parser = new ComponentParser();
                    parser.parseFromCsv('./data/' + f).then(comps => {
                        comps.forEach(c => {
                            let options = {
                                method: 'PUT',
                                uri: esUrl + '/components/_doc/' + c.id,
                                body: c,
                                json: true // Automatically stringifies the body to JSON
                            };
                            
                            rp(options).then(res => {
                                console.log('component created:', res);
                            }, err => {
                                console.error(err);
                            });
                        });
                    });
                }
            });
        }
    });
};

const setup = () => {
    rp(esUrl + '/events').then(res => console.log('index "events" already exists'), err => {
        let options = {
            method: 'PUT',
            uri: esUrl + '/events',
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
