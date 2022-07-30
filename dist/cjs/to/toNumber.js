"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.booleanToNumber = booleanToNumber;
exports.default = toNumber;
exports.stringToNumber = stringToNumber;

var _isObject = _interopRequireDefault(require("../is/isObject"));

var _isSymbol = _interopRequireDefault(require("../is/isSymbol"));

var _vars = require("../core/vars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `value` to a number.

 * @example
 *
 * toNumber(3.2);
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * toNumber(Infinity);
 * // => Infinity
 *
 * toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value === 'number') {
    return value;
  }

  if ((0, _isSymbol.default)(value)) {
    return NaN;
  }

  if ((0, _isObject.default)(value)) {
    var other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = (0, _isObject.default)(other) ? other + '' : other;
  }

  if (typeof value !== 'string') {
    return value === 0 ? value : +value;
  }

  return stringToNumber(value);
}

function stringToNumber(value) {
  value = value.replace(_vars.reTrim, '');

  var isBinary = _vars.reIsBinary.test(value);

  return isBinary || _vars.reIsOctal.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : _vars.reIsBadHex.test(value) ? NaN : +value;
}

function booleanToNumber(value) {
  return +value;
}
//# sourceMappingURL=toNumber.js.map