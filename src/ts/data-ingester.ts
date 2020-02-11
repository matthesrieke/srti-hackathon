import * as fs from 'fs';
import * as path from 'path';

import { MessageParser } from './message-parser';

export class DataIngester {

    created: Date;
    dataDirectories: any[];

    constructor(private baseDir: string, private esUrl: string) {
    }

    public startIngestion() {

        this.created = new Date();
        this.walkAsync(this.baseDir, true).then((dataDirs: any[]) => {
            console.log('leaf data dir count', dataDirs.length);
            this.dataDirectories = dataDirs;

            this.processNextDataDirectory();
        }).catch(err => {
            console.warn('could not read base directory', err);
        });
    }

    private processNextDataDirectory() {
        console.log('Processing next data directory. remaining', this.dataDirectories.length);
        if (this.dataDirectories.length > 0) {
            const dd = this.dataDirectories.pop();
            this.walkAsync(dd).then((dataFiles: any[]) => {
                console.log('preparing data file parsing. count', dataFiles.length);
                const parser = new MessageParser(this.esUrl, this.created, dataFiles, dd);
                parser.ingestDataFiles().then(done => {
                    parser.indexToElasticsearch();
                    this.processNextDataDirectory();
                });
            }).catch(err => {
                console.warn('could not read leaf directory', err);
                this.processNextDataDirectory();
            });
        }
    }

    private walkAsync(dir, onlyLeafDirs?: boolean) {
        return new Promise((resolve, reject) => {
            fs.readdir(dir, (error, files) => {
                if (error) {
                    return reject(error);
                }

                if (onlyLeafDirs && files.filter(d => d.indexOf('.proto') > 0).length > 0) {
                    console.log('got leaf dir', dir);
                    resolve(dir);
                } else {
                    Promise.all(files.map((file) => {
                        return new Promise((resolve, reject) => {
                            const filepath = path.join(dir, file);

                            if (file.indexOf('.proto') < 0) {
                                this.walkAsync(filepath, onlyLeafDirs).then(resolve);
                            } else {
                                resolve(filepath);
                            }
                        });
                    })).then((foldersContents) => {
                        resolve(foldersContents.reduce((all: any, folderContents) => all.concat(folderContents), []));
                    });
                }

            });
        });
    }



}