import { hasUnicode, reUnicode } from './unicode'

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} value The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(value: string): string[] {
  return value.match(reUnicode) || []
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} value The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(value: string): string[] {
  return value.split('')
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} value The string to convert.
 * @returns {Array} Returns the converted array.
 */
export default function stringToArray(value: string): string[] {
  return hasUnicode(value) ? unicodeToArray(value) : asciiToArray(value)
}
