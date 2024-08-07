"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = keys;
const isArrayLike_1 = __importDefault(require("../is/isArrayLike"));
const arrayLikeKeys_1 = __importDefault(require("../internal/arrayLikeKeys"));
const baseKeys_1 = __importDefault(require("../internal/base/baseKeys"));
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
    return (0, isArrayLike_1.default)(object) ? (0, arrayLikeKeys_1.default)(object) : (0, baseKeys_1.default)(object);
}
//# sourceMappingURL=keys.js.map