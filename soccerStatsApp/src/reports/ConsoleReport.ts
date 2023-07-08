import { OutputTarget } from "./../Summary";

export class ConsoleReport implements OutputTarget {
  printReport(report: string): void {
    console.log(report);
  }
}
