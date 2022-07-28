"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = upperFirst;

/**
 * Converts the first character of string to upper case
 *
 * @param {string} string
 * @returns {string}
 */
function upperFirst(string) {
  var stringTrim = string.trim();
  return stringTrim.charAt(0).toUpperCase() + stringTrim.slice(1).toLowerCase();
}
//# sourceMappingURL=upperFirst.js.map