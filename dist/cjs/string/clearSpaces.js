"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearSpaces;

/**
 * Remove extra spaces from string
 *
 * @param {string} str
 * @returns {string}
 */
function clearSpaces(str) {
  return str.toString().replace(/\s+/g, ' ').trim();
}
//# sourceMappingURL=clearSpaces.js.map