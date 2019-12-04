/** Used as references for various `Number` constants. */
import {reIsUint} from '../core/vars'

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
export default function isIndex(value, length) {
    const type = typeof value
    length = length == null ? Number.MAX_SAFE_INTEGER : length

    return !!length &&
        (type === 'number' ||
            (type !== 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 === 0 && value < length)
}
