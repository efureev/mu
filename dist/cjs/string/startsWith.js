"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startsWith;

var _toString = _interopRequireDefault(require("../to/toString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if string starts with the given target string
 *
 * @param {string} str
 * @param {string} target
 * @returns {boolean}
 */
function startsWith(str, target) {
  target = (0, _toString.default)(target);
  return (0, _toString.default)(str).slice(0, target.length) === target;
}
//# sourceMappingURL=startsWith.js.map