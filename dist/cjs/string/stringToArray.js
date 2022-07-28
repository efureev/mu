"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringToArray;

var _unicode = require("./unicode");

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} value The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(value) {
  return value.match(_unicode.reUnicode) || [];
}
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} value The string to convert.
 * @returns {Array} Returns the converted array.
 */


function asciiToArray(value) {
  return value.split('');
}
/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} value The string to convert.
 * @returns {Array} Returns the converted array.
 */


function stringToArray(value) {
  return (0, _unicode.hasUnicode)(value) ? unicodeToArray(value) : asciiToArray(value);
}
//# sourceMappingURL=stringToArray.js.map