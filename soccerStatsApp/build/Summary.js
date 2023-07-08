"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
// A Composition-Based approach where Class has reference to another Object for reusable & flexible code
// Delegation is when one class delegates another one to do something
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const report = this.analyzer.createReport(matches);
        this.outputTarget.printReport(report);
    }
}
exports.Summary = Summary;
