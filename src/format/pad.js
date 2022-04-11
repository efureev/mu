import padStart from '../string/padStart.js'
import isNil from '../is/isNil.js'

/**
 * @param {String|Number} string
 * @param {Number} targetLength
 * @returns {string}
 */
export function padNumber(string, targetLength) {
  if (isNil(string)) {
    return '0'
  }
  return padStart(string, targetLength, '0')
}

/**
 * @param {String|Number} string
 * @returns {string}
 */
export function padDateTime(string) {
  if (isNil(string)) {
    return '00'
  }
  return padStart(string, 2, '0')
}
