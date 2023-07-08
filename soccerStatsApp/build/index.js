"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReport_1 = require("./reports/HtmlReport");
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// passing generic reusable class, class is an Object
// note - matchReader class has access to loadFile method of another class
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.loadFile();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
