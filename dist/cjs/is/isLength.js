"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isLength;
/**
 * Checks if `value` is a valid array-like length.
 *
 *
 * @example
 *
 * isLength(3);
 * // => true
 *
 * isLength(Number.MIN_VALUE);
 * // => false
 *
 * isLength(Infinity);
 * // => false
 *
 * isLength('3');
 * // => false
 */
function isLength(value) {
    return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= Number.MAX_SAFE_INTEGER;
}
//# sourceMappingURL=isLength.js.map