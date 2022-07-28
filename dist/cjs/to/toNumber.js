"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toNumber;

var _is = require("../is");

var _vars = require("../core/vars");

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

  if ((0, _is.isSymbol)(value)) {
    return NaN;
  }

  if ((0, _is.isObject)(value)) {
    var other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = (0, _is.isObject)(other) ? other + '' : other;
  }

  if (typeof value !== 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(_vars.reTrim, '');

  var isBinary = _vars.reIsBinary.test(value);

  return isBinary || _vars.reIsOctal.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : _vars.reIsBadHex.test(value) ? NaN : +value;
}
//# sourceMappingURL=toNumber.js.map