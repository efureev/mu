'use strict'

import { padStart } from '../string'
import { isNil } from '../is'

/**
 * @param {String|Number} str
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
 * @param {String|Number} str
 * @returns {string}
 */
export function padDateTime(string) {
  if (isNil(string)) {
    return '00'
  }
  return padStart(string, 2, '0')
}
