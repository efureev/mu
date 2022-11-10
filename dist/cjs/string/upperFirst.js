"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts the first character of string to upper case
 *
 * @param {string} string
 * @returns {string}
 */
function upperFirst(string) {
    const stringTrim = string.trim();
    return stringTrim.charAt(0).toUpperCase() + stringTrim.slice(1).toLowerCase();
}
exports.default = upperFirst;
//# sourceMappingURL=upperFirst.js.map