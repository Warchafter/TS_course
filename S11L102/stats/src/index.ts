import { MatchReader } from "./MatchReader";
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from "./MatchResult";

const reader = new MatchReader('football.csv');
reader.read();

// Create an object that satisfies the 'DataReader' interface
const csvFilereader = new CsvFileReader('foorball.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface

let manUnitedWins = 0;

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United has won ${manUnitedWins} games!`);