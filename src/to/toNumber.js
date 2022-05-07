import isObject from '../is/isObject.js'
import isSymbol from '../is/isSymbol.js'
import { reIsBadHex, reIsBinary, reIsOctal, reTrim } from '../core/vars.js'

/**
 * Converts `value` to a number.
 *
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
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
export default function toNumber(value) {
  if (typeof value === 'number') {
    return value
  }

  if (isSymbol(value)) {
    return NaN
  }

  if (isObject(value)) {
    const other = typeof value.valueOf === 'function' ? value.valueOf() : value
    value = isObject(other) ? other + '' : other
  }

  if (typeof value !== 'string') {
    return value === 0 ? value : +value
  }

  value = value.replace(reTrim, '')

  const isBinary = reIsBinary.test(value)

  return isBinary || reIsOctal.test(value)
    ? parseInt(value.slice(2), isBinary ? 2 : 8)
    : reIsBadHex.test(value)
    ? NaN
    : +value
}
