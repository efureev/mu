"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Used as references for various `Number` constants. */
const vars_1 = require("../core/vars");
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
    const type = typeof value;
    length = length == null ? Number.MAX_SAFE_INTEGER : length;
    return (!!length &&
        (type === 'number' || (type !== 'symbol' && vars_1.reIsUint.test(value))) &&
        value > -1 &&
        value % 1 === 0 &&
        value < length);
}
exports.default = isIndex;
//# sourceMappingURL=isIndex.js.map