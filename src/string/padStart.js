import isNil from '../is/isNil.js'

/**
 * This function add symbols to string in start or end
 *
 * @param {string|int} string
 * @param {int} targetLength
 * @param {string} padString
 * @param {boolean} leading If TRUE add symbols before string, else - after
 * @returns {string}
 */
export function pad(string, targetLength, padString = ' ', leading = true) {
  targetLength = Math.trunc(targetLength) //floor if number or convert non-number to 0;
  if (isNil(string)) {
    return ''
  }
  string = String(string)
  padString = String(padString)
  if (string.length > targetLength) {
    return String(string)
  } else {
    targetLength = targetLength - string.length
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length) //append to original to ensure we are longer than needed
    }

    return leading
      ? padString.slice(0, targetLength) + String(string)
      : String(string) + padString.slice(0, targetLength)
  }
}

/**
 * This function add leading symbols
 *
 * @param {String|Number} string
 * @param {Number} targetLength
 * @param {String} padString
 * @return {string}
 */
export default function padStart(string, targetLength, padString = ' ') {
  return pad(string, targetLength, padString)
}

/**
 * This function add ending symbols
 *
 * @param {String|Number} string
 * @param {Number} targetLength
 * @param {String} padString
 * @return {string}
 */
export function padEnd(string, targetLength, padString = ' ') {
  return pad(string, targetLength, padString, false)
}
