"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = stringToArray;
const unicode_1 = require("./unicode");
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} value The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(value) {
    return value.match(unicode_1.reUnicode) || [];
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
    return (0, unicode_1.hasUnicode)(value) ? unicodeToArray(value) : asciiToArray(value);
}
//# sourceMappingURL=stringToArray.js.map