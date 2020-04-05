import { isNil } from '../is'

/**
 * This function add leading zero
 *
 * @param {string|int} string
 * @param {int} targetLength
 * @param {string} padString
 * @returns {string}
 */
export default function padStart(string, targetLength, padString = ' ') {
  targetLength = targetLength >> 0 //floor if number or convert non-number to 0;
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
    return padString.slice(0, targetLength) + String(string)
  }
}

if (!String.prototype.padStart) {
  String.prototype.padStart = padStart.call(this)
}
