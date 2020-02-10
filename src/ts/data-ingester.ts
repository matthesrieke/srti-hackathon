import * as fs from 'fs';
import * as path from 'path';
import { default as pLimit } from 'p-limit';

import { MessageParser } from './message-parser';

export class DataIngester {

    created: Date;

    constructor(private baseDir: string, private esUrl: string) {
    }

    public startIngestion() {
        const limit = pLimit(1);
        this.created = new Date();
        this.walkAsync(this.baseDir, true).then((dataDirs: any[]) => {
            console.log('leaf data dir count', dataDirs.length);
            dataDirs.map(dd => {

                this.walkAsync(dd).then((dataFiles: any[]) => {
                    console.log('preaparing data file parsing. count', dataFiles.length);
                    const parser = new MessageParser(this.esUrl, this.created, dataFiles, dd);
                    parser.ingestDataFiles();
                }).catch(err => {
                    console.warn('could not read leaf directory', err);
                });

            });

        }).catch(err => {
            console.warn('could not read base directory', err);
        });
    }


    private walk(dir: string) {
        var results = [];
        var list = fs.readdirSync(dir);
        list.forEach(file => {
            file = dir + '/' + file;
            var stat = fs.statSync(file);
            if (stat && stat.isDirectory()) {
                /* Recurse into a subdirectory */
                results = results.concat(this.walk(file));
            } else {
                /* Is a file */
                results.push(file);
            }
        });
        return results;
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