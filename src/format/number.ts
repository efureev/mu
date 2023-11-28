import isInteger from '~/is/isInteger'
import type { TextNumber } from '~/internal/types'

/**
 * Formatting number
 * @param {String|Number} value
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSeparator
 * @param {Boolean} clearDecimals
 * @returns {string}
 */
export default function number(
  value: TextNumber,
  decimals: number = 2,
  decPoint: string = '.',
  thousandsSeparator: string = ',',
  clearDecimals: boolean = false
): string {
  decimals = isNaN(decimals) ? 2 : Math.abs(decimals)
  const num = Number(value)
  const sign = num < 0 ? '-' : ''
  value = Math.abs(+num || 0)

  const intPart = parseInt(num.toFixed(decimals), 10) + ''
  // const intPartStr = intPart + ''
  const j = intPart.length > 3 ? intPart.length % 3 : 0

  return (
    sign +
    (j ? intPart.slice(0, j) + thousandsSeparator : '') +
    intPart.slice(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSeparator) +
    (decimals
      ? clearDecimals && isInteger(num)
        ? ''
        : decPoint +
          Math.abs(num - +intPart)
            .toFixed(decimals)
            .slice(2)
      : '')
  )
}

export function numberRus(value: TextNumber, decimals: number = 2): string {
  return number(value, decimals, '.', ' ', true)
}
