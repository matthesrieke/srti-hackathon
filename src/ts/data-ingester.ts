import * as fs from 'fs';
import * as path from 'path';

import { MessageParser } from './message-parser';

export class DataIngester {

    created: Date;

    constructor(private baseDir: string, private esUrl: string) {
    }

    public startIngestion() {
        this.created = new Date();
        this.walkAsync(this.baseDir, true).then((dataDirs: any[]) => {
            console.log('leaf data dir count', dataDirs.length);
            dataDirs.forEach(dd => {
                this.walkAsync(dd).then((dataFiles: any[]) => {
                    const parser = new MessageParser(this.esUrl, this.created);
                    parser.ingestDataFiles(dataFiles);
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
                console.log('file count', dir, files.length);
                Promise.all(files.map((file) => {
                    return new Promise((resolve, reject) => {
                        const filepath = path.join(dir, file);

                        if (file.indexOf('.proto') < 0) {
                            if (onlyLeafDirs) {
                                const l = fs.readdirSync(filepath)
                                    .filter(d => d.indexOf('.proto') > 0).length;
                                if (l > 0) {
                                    console.log('got leaf dir', filepath);
                                    resolve(filepath);
                                } else {
                                    this.walkAsync(filepath).then(resolve);
                                }
                            } else {
                                this.walkAsync(filepath).then(resolve);
                            }
                        } else {
                            resolve(filepath);
                        }
                    });
                })).then((foldersContents) => {
                    resolve(foldersContents.reduce((all: any, folderContents) => all.concat(folderContents), []));
                });
            });
        });
    }



}