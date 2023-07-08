import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";

interface DataReader {
  readFile(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  // Composition approach - This Class has reference to another Object for reusable & flexible code
  constructor(public reader: DataReader) {}

  loadFile(): void {
    this.reader.readFile();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
