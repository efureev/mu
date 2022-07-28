"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endsWith;

var _toString = _interopRequireDefault(require("../to/toString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if string ends with the given target string
 *
 * @param {string} str
 * @param {string} target
 * @returns {boolean}
 */
function endsWith(str, target) {
  str = (0, _toString.default)(str);
  target = (0, _toString.default)(target);
  var position = str.length;
  var end = position;
  position -= target.length;
  return position >= 0 && str.slice(position, end) === target;
}
//# sourceMappingURL=endsWith.js.map