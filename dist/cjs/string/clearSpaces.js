"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Remove extra spaces from string
 *
 * @param {string} str
 * @returns {string}
 */
function clearSpaces(str) {
    return str.toString().replace(/\s+/g, ' ').trim();
}
exports.default = clearSpaces;
//# sourceMappingURL=clearSpaces.js.map