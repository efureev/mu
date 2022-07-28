import number from './number'
import { TextNumber } from '../internal/types'

const UnitsDefault = ['', 'K', 'M', 'B', 'T']
/**
 * Format
 * @param {Number|String} value
 * @param {Array} units
 * @param {Number} kilo
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSeparator
 * @param {String} suffixSeparator
 * @returns {string}
 */
export default function intWord(
  value: TextNumber,
  units: string[] = UnitsDefault,
  kilo: number = 1000,
  decimals: number = 2,
  decPoint: string = '.',
  thousandsSeparator: string = ',',
  suffixSeparator: string = ''
): string {
  let unit = units.length - 1
  decimals = isNaN(decimals) ? 2 : Math.abs(decimals)

  for (let i = 0; i < units.length; i++) {
    if (value < kilo ** (i + 1)) {
      unit = i
      break
    }
  }

  const humanized = +value / kilo ** unit
  const suffix = units[unit] ? suffixSeparator + units[unit] : ''

  return number(humanized, decimals, decPoint, thousandsSeparator) + suffix
}
