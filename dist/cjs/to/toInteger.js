"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInteger;

var _toFinite = _interopRequireDefault(require("./toFinite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @example
 *
 * toInteger(3.2);
 * // => 3
 *
 * toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = (0, _toFinite.default)(value);
  var remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
//# sourceMappingURL=toInteger.js.map