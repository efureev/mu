'use strict'

import { num } from '.'

/**
 * Format
 * @param {Number|String} number
 * @param {Array} units
 * @param {Number} kilo
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSep
 * @param {String} suffixSep
 * @returns {string}
 */
export default function intWord(
  number,
  units = ['', 'K', 'M', 'B', 'T'],
  kilo = 1000,
  decimals = 2,
  decPoint = '.',
  thousandsSeparator = ',',
  suffixSeparator = ''
) {
  let unit = units.length - 1
  decimals = isNaN(decimals) ? 2 : Math.abs(decimals)

  for (let i = 0; i < units.length; i++) {
    if (number < kilo ** (i + 1)) {
      unit = i
      break
    }
  }
  const humanized = number / kilo ** unit

  const suffix = units[unit] ? suffixSeparator + units[unit] : ''
  return num(humanized, decimals, decPoint, thousandsSeparator) + suffix
}
