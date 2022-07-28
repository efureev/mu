"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArrayLike;

var _is = require("../is");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @example
 *
 * isArrayLike([1, 2, 3]);
 * // => true
 *
 * isArrayLike(document.body.children);
 * // => true
 *
 * isArrayLike('abc');
 * // => true
 *
 * isArrayLike(()=>{}));
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0, _is.isLength)(value.length) && !(0, _is.isFunction)(value);
}
//# sourceMappingURL=isArrayLike.js.map