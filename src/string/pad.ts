import isNil from '../is/isNil'
import { TextNumberNullable } from '../internal/types'

/**
 * This function add symbols to string in start or end
 *
 * @param {string | number | undefined} value
 * @param {int} targetLength
 * @param {string} padString
 * @param {boolean} leading If TRUE add symbols before string, else - after
 * @returns {string}
 */
export default function pad(
  value: TextNumberNullable,
  targetLength: number,
  padString: string = ' ',
  leading: boolean = true
): string {
  targetLength = Math.trunc(targetLength) //floor if number or convert non-number to 0;
  if (isNil(value)) {
    return ''
  }
  value = String(value)

  if (value.length > targetLength) {
    return value
  }

  targetLength = targetLength - value.length
  if (targetLength > padString.length) {
    padString += padString.repeat(targetLength / padString.length) //append to original to ensure we are longer than needed
  }

  return leading ? padString.slice(0, targetLength) + value : value + padString.slice(0, targetLength)
}

/**
 * This function add leading symbols
 */
export function padStart(value: TextNumberNullable, targetLength: number, padString: string = ' '): string {
  return pad(value, targetLength, padString)
}

/**
 * This function add ending symbols
 */
export function padEnd(value: TextNumberNullable, targetLength: number, padString: string = ' '): string {
  return pad(value, targetLength, padString, false)
}
