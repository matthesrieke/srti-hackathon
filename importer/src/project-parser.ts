import csv from 'csvtojson';
import { Project } from './project';
import { Parser } from './abstract-parser';
import { plainToClass } from "class-transformer";

export class ProjectParser extends Parser {

    public parseFromCsv(filePath: string): Promise<Project[]> {
        const promiseResult = new Promise<Project[]>((resolve, reject) => {
            csv({
                noheader: false,
                headers: ['updated','contact','name','usedComponents','isImprovedComponents','improvedComponents','newFeaturesForImprovedComponents','developmentTarget','developmentTimeline','codeManagement','isNewComponents','newComponents','usedTechnologies','architectureOverview','isLongtermUsage',
                    'fullTitle',
                    'description',
                    'type',
                    'overallGoal',
                    'url',
                    'logoUrl',
                    'startDate',
                    'endDate',
                    'budget',
                    'customer',
                    'programme',
                    'grantNo',
                    'executingAgency',
                    'acknowledgement',
                    'partner',
                    'team']
            })
            .fromFile(filePath)
            .then((jsonObj: any[]) => {
                jsonObj.forEach(row => {
                    row.id = row.name.toLowerCase().replace(/\s/g, "_");
                    row.updated = new Date(row.updated);
                    row.usedComponents = this.splitAndTrim(row.usedComponents);
                    row.isImprovedComponents = this.toBoolean(row.isImprovedComponents);
                    row.improvedComponents = this.splitAndTrim(row.improvedComponents);
                    row.newFeaturesForImprovedComponents = this.splitAndTrim(row.newFeaturesForImprovedComponents);
                    row.developmentTarget = this.splitAndTrim(row.developmentTarget);
                    row.codeManagement = this.splitAndTrim(row.codeManagement);
                    row.isNewComponents = this.toBoolean(row.isNewComponents);
                    row.newComponents = this.splitAndTrim(row.newComponents);
                    row.usedTechnologies = this.splitAndTrim(row.usedTechnologies);
                    row.isLongtermUsage = this.toBoolean(row.isLongtermUsage);
                    row.budget = this.toNumber(row.budget);
                    row.partner = this.splitAndTrim(row.partner);
                    row.team = this.splitAndTrim(row.team);
                    row._fulltext = this.extractFulltext(row);
                });
                
                const result : Project[] = plainToClass(Project, jsonObj);
                resolve(result.filter(c => c.name && c.name.length > 0));
            }, (failed) => {
                reject(failed);
            });
        });

        return promiseResult;
    }

}