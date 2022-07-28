"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elapsed = elapsed;

var _index = require("./index");

/**
 * Returns difference in milliseconds between dates
 *
 * @param {Date} dateA The first date.
 * @param {Date} [dateB=new Date()] (optional) The second date.
 * @return {Number} The difference in milliseconds
 *
 * @memberof µ.date
 * @author efureev
 */
function elapsed(dateA, dateB) {
  return Math.abs(+dateA - (+dateB || (0, _index.now)()));
}
//# sourceMappingURL=elapsed.js.map