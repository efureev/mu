"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trimSuffix;

var _endsWith = _interopRequireDefault(require("./endsWith"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Remove a suffix from a String
 *
 * @param {string} str
 * @param {string} suffix
 * @returns {string}
 */
function trimSuffix(str, suffix) {
  if (!str || !suffix || !(0, _endsWith.default)(str, suffix)) {
    return str;
  }

  return str.substring(0, str.length - suffix.length);
}
//# sourceMappingURL=trimSuffix.js.map