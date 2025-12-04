import type { TextNumber } from '~/internal/types'

export type NumberFormatOptions = Readonly<{
  decimals?: number
  decPoint?: string
  thousandsSeparator?: string
  clearDecimals?: boolean
}>

// Hoisted constant regex to avoid re-allocating per call
const GROUPS_RE = /(\d{3})(?=\d)/g

/**
 * Formatting number
 * @param {String|Number} value
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSeparator
 * @param {Boolean} clearDecimals
 * @returns {string}
 */
// Overloads support both legacy positional args and an options object for DX
export default function number(value: TextNumber, options?: NumberFormatOptions): string
export default function number(
  value: TextNumber,
  decimals?: number,
  decPoint?: string,
  thousandsSeparator?: string,
  clearDecimals?: boolean
): string
export default function number(
  value: TextNumber,
  a?: number | NumberFormatOptions,
  b?: string,
  c?: string,
  d?: boolean
): string {
  // Normalize inputs into options
  const defaults = {
    decimals: 2,
    decPoint: '.',
    thousandsSeparator: ',',
    clearDecimals: false,
  } as const satisfies Required<NumberFormatOptions>

  let decimals: number
  let decPoint: string
  let thousandsSeparator: string
  let clearDecimals: boolean

  if (typeof a === 'object' && a != null) {
    decimals = a.decimals ?? defaults.decimals
    decPoint = a.decPoint ?? defaults.decPoint
    thousandsSeparator = a.thousandsSeparator ?? defaults.thousandsSeparator
    clearDecimals = a.clearDecimals ?? defaults.clearDecimals
  } else {
    decimals = a ?? defaults.decimals
    decPoint = b ?? defaults.decPoint
    thousandsSeparator = c ?? defaults.thousandsSeparator
    clearDecimals = d ?? defaults.clearDecimals
  }
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
    intStr.slice(j).replace(GROUPS_RE, `$1${thousandsSeparator}`)

  // Decide on fractional part rendering
  const showFraction = decimals > 0 && !(clearDecimals && Number.isInteger(abs))
  const fraction = showFraction ? decPoint + fracStr : ''

  return sign + intWithSep + fraction
}

export function numberRus(value: TextNumber, decimals: number = 2): string {
  return number(value, { decimals, decPoint: ',', thousandsSeparator: ' ', clearDecimals: true })
}
