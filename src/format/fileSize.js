'use strict'

import intWord from './intWord'

/**
 * Display
 * @param {Number|String} size
 * @param {Number} kilo
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSeparator
 * @param {String} suffixSeparator
 * @returns {string}
 */
export default function fileSize(
  size,
  kilo = 1024,
  decimals = 2,
  decPoint = '.',
  thousandsSeparator = ',',
  suffixSeparator = ' '
) {
  if (size <= 0) {
    return '0 bytes'
  }
  if (size < kilo) {
    decimals = 0
  }

  return intWord(
    size,
    ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb'],
    kilo,
    decimals,
    decPoint,
    thousandsSeparator,
    suffixSeparator
  )
}
