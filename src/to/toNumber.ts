import isObject from '~/is/isObject'
import isSymbol from '~/is/isSymbol'
import { reIsBadHex, reIsBinary, reIsOctal, reTrim } from '~/core/vars'

/**
 * Converts `value` to a number.

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
export default function toNumber(value: any): number {
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

  return stringToNumber(value)
}

export function stringToNumber(value: string): number {
  value = value.replace(reTrim, '')
  const isBinary = reIsBinary.test(value)

  return isBinary || reIsOctal.test(value)
    ? parseInt(value.slice(2), isBinary ? 2 : 8)
    : reIsBadHex.test(value)
      ? NaN
      : +value
}

export function booleanToNumber(value: boolean): number {
  return +value
}
