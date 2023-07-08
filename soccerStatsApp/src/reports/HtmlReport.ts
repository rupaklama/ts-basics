import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  printReport(report: string): void {
    const html = `
      <div>
        <h1>Summary</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync("report.html", html);
  }
}
