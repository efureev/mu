import intWord from './intWord'
import type { TextNumber } from '~/internal/types'

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
  size: TextNumber,
  kilo: number = 1024,
  decimals: number = 2,
  decPoint: string = '.',
  thousandsSeparator: string = ',',
  suffixSeparator: string = ' '
): string {
  const num = +size

  if (num <= 0) {
    return '0 bytes'
  }

  if (num < kilo) {
    decimals = 0
  }

  return intWord(
    num,
    ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb'],
    kilo,
    decimals,
    decPoint,
    thousandsSeparator,
    suffixSeparator
  )
}
