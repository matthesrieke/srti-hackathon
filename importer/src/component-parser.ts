import csv from 'csvtojson';
import { Project } from './project';
import { Parser } from './abstract-parser';
import { plainToClass } from "class-transformer";
import { Component } from './component';



export class ComponentParser extends Parser {

    public parseFromCsv(filePath: string): Promise<Component[]> {
        const promiseResult = new Promise<Component[]>((resolve, reject) => {
            csv({
                noheader: false,
                headers: ['updated', 'contact', 'name', 'technologicalBaseline', 'versionSpecificDependencies', 'dependenciesTo52NComponents', 'license', 'additionalInformation', 'isDockerConcept', 'isReleaseTags', 'dockerDependenciesDocumentation', 'dockerImageAutomation', 'isDockerConfigurable', 'projectReferences', 'codeManagers', 'contributors', 'specificContacts', 'scmUrl', 'scmBranches', 'documentationLocation', 'documentationStatus', 'isInstallDocumentation', 'isDocumentationAsReadme', 'latestReleaseDate', 'nextPlannedReleaseDate', 'releasePolicy', 'publicDeployments', 'developmentRestrictions', 'developmentConstraints']
            })
                .fromFile(filePath)
                .then((jsonObj: any[]) => {
                    jsonObj.forEach(row => {
                        row.id = row.name.toLowerCase().replace(/\s/g, "_");
                        row.updated = new Date(row.updated);
                        row.technologicalBaseline = this.splitAndTrim(row.technologicalBaseline);
                        row.versionSpecificDependencies = this.splitAndTrim(row.versionSpecificDependencies);
                        row.dependenciesTo52NComponents = this.splitAndTrim(row.dependenciesTo52NComponents);
                        row.isDockerConcept = this.toBoolean(row.isDockerConcept);
                        row.isReleaseTags = this.toBoolean(row.isReleaseTags);
                        row.isDockerConfigurable = this.toBoolean(row.isDockerConfigurable);
                        row.projectReferences = this.splitAndTrim(row.projectReferences);
                        row.codeManagers = this.splitAndTrim(row.codeManagers);
                        row.contributors = this.splitAndTrim(row.contributors);
                        row.specificContacts = this.splitAndTrim(row.specificContacts);
                        row.scmBranches = this.splitAndTrim(row.scmBranches);
                        row.isInstallDocumentation = this.toBoolean(row.isInstallDocumentation);
                        row.isDocumentationAsReadme = this.toBoolean(row.isDocumentationAsReadme);
                        row.publicDeployments = this.splitAndTrim(row.publicDeployments);
                        
                        if (!row.latestReleaseDate || row.latestReleaseDate.length === 0) {
                            delete row.latestReleaseDate;
                        } else {
                            row.latestReleaseDate = new Date(row.latestReleaseDate);
                            console.log(row.latestReleaseDate);
                        }
                        
                        if (!row.nextPlannedReleaseDate || row.nextPlannedReleaseDate.length === 0) {
                            delete row.nextPlannedReleaseDate;
                        } else {
                            row.nextPlannedReleaseDate = new Date(row.nextPlannedReleaseDate);
                            console.log(row.nextPlannedReleaseDate);
                        }

                        row._fulltext = this.extractFulltext(row);
                    });

                    const result: Component[] = plainToClass(Component, jsonObj);
                    resolve(result.filter(c => c.name && c.name.length > 0));
                }, (failed) => {
                    reject(failed);
                });
        });

        return promiseResult;
    }

}