"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trimPrefix;

var _startsWith = _interopRequireDefault(require("./startsWith"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Remove a prefix from a String
 *
 * @param {string} str
 * @param {string} prefix
 * @returns {string}
 */
function trimPrefix(str, prefix) {
  if (!str || !prefix || !(0, _startsWith.default)(str, prefix)) {
    return str;
  }

  return str.substring(prefix.length);
}
//# sourceMappingURL=trimPrefix.js.map