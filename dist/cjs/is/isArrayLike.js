"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isFunction_1 = __importDefault(require("../is/isFunction"));
const isLength_1 = __importDefault(require("../is/isLength"));
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
    return value != null && (0, isLength_1.default)(value.length) && !(0, isFunction_1.default)(value);
}
exports.default = isArrayLike;
//# sourceMappingURL=isArrayLike.js.map