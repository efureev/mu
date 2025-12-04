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
  // Normalize decimals: integer, non-negative, default 2 on invalid
  decimals = Number.isFinite(decimals) ? Math.abs(Math.trunc(decimals)) : 2

  const num = Number(value)

  // Edge cases first
  if (Number.isNaN(num)) return 'NaN'
  if (!Number.isFinite(num)) return String(num)

  const isNegZero = Object.is(num, -0)
  const sign = num < 0 || isNegZero ? '-' : ''
  const abs = Math.abs(num)

  // Build fixed string once and split into integer/fractional parts
  const fixed = abs.toFixed(decimals)
  let [intStr, fracStr = ''] = fixed.split('.')

  // Insert thousands separators into integer part
  const j = intStr.length > 3 ? intStr.length % 3 : 0
  const intWithSep =
    (j ? intStr.slice(0, j) + thousandsSeparator : '') +
    intStr.slice(j).replace(/(\d{3})(?=\d)/g, `$1${thousandsSeparator}`)

  // Decide on fractional part rendering
  const showFraction = decimals > 0 && !(clearDecimals && Number.isInteger(abs))
  const fraction = showFraction ? decPoint + fracStr : ''

  return sign + intWithSep + fraction
}

export function numberRus(value: TextNumber, decimals: number = 2): string {
  return number(value, decimals, ',', ' ', true)
}
