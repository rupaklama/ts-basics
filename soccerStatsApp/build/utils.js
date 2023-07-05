"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    // 29/09/2018
    const dateParts = dateString.split("/").map((value) => parseInt(value));
    // new Date(year, month, day), month in js is 0 based
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
