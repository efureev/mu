"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keys;

var _isArrayLike = _interopRequireDefault(require("../is/isArrayLike"));

var _arrayLikeKeys = _interopRequireDefault(require("../internal/arrayLikeKeys"));

var _baseKeys = _interopRequireDefault(require("../internal/base/baseKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0, _isArrayLike.default)(object) ? (0, _arrayLikeKeys.default)(object) : (0, _baseKeys.default)(object);
}
//# sourceMappingURL=keys.js.map