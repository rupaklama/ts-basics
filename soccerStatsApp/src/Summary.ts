import { MatchData } from "./MatchData";

export interface Analyzer {
  createReport(matches: MatchData[]): string;
}

export interface OutputTarget {
  printReport(report: string): void;
}

// A Composition-Based approach where Class has reference to another Object for reusable & flexible code
// Delegation is when one class delegates another one to do something
export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.createReport(matches);
    this.outputTarget.printReport(report);
  }
}
