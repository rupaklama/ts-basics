import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

import { HtmlReport } from "./reports/HtmlReport";

const csvFileReader = new CsvFileReader("football.csv");

// passing generic reusable class, class is an Object
// note - matchReader class has access to loadFile method of another class
const matchReader = new MatchReader(csvFileReader);
matchReader.loadFile();

const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
