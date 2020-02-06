export abstract class Parser {

    protected splitAndTrim(str: string) : string[] {
        str = str.replace(/\r?\n|\r/g, ' ');
    
        let char = ',';
        if (str.indexOf('* ') >= 0) {
            char = '* ';
        }
        
        return str.split(char).map(s => s.trim()).filter(s => s.length > 0);
    }

    protected toBoolean(str: string) : boolean {
        return str.toLowerCase() === 'ja' || str.toLowerCase() === 'yes';
    }

    protected toNumber(str: string) : number {
        return new Number(str).valueOf();
    }

    protected extractFulltext(row: any): string {
        let content = '';
        for (const key in row) {
            if (row.hasOwnProperty(key)) {
                const element = row[key];
                content = content + ' ' + JSON.stringify(element);
            }
        }

        content = content.split('{').join('').split('}').join('');
        content = content.split('[').join('').split(']').join('');
        content = content.split('"').join('').split(',').join(' ');
        content = content.split(':').join(' ');
        content = content.split('\\n').join(' ');
        
        return content.trim();
    }

}