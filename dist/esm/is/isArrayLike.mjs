import isFunction from '../is/isFunction.mjs';
import isLength from '../is/isLength.mjs';
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
export default function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
//# sourceMappingURL=isArrayLike.mjs.map