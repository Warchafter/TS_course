import fs from 'fs';

export abstract class CsvFileReader<Type> {
    data: Type[] = [];

    constructor(public filename: string) {}

    abstract mapRow(row: string[]): Type;

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n').map((row: string): string[] => {
            return row.split(',');
        }).map(this.mapRow);
    }
}