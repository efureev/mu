"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tap;

var _isFunction = _interopRequireDefault(require("../is/isFunction"));

var _isBasicType = _interopRequireDefault(require("../is/isBasicType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method invokes `interceptor` and returns `value`. The interceptor
 * is invoked with one argument; (value). The purpose of this method is to
 * "tap into" a method chain sequence in order to modify intermediate results.
 *
 * @static
 * @param {*} value The value to provide to `interceptor`.
 * @param {Function} interceptor The function to invoke.
 * @returns {*} Returns `value`.
 * @example
 *
 * tap('test') // 'test'
 * tap([1, 2, 3], (value) => value.pop()) // [1,2]
 * tap({b: 2, a: 'test'}, (value) => delete value.a) // {b: 2}
 * tap(()=>100)) // 100
 * tap(()=>100), (value) => value / 2) // 50
 *
 */
function tap(value, interceptor) {
  if ((0, _isFunction.default)(value)) {
    value = value();
  }

  if (interceptor && (0, _isFunction.default)(interceptor)) {
    if ((0, _isBasicType.default)(value)) {
      return interceptor(value);
    }

    interceptor(value);
  }

  return value;
}
//# sourceMappingURL=tap.js.map