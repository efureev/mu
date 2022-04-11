import isInteger from '../is/isInteger.js'

/**
 * Formatting number
 * @param {String|Number} value
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSeparator
 * @param {Boolean} clearDecimals
 * @returns {string}
 */
export default function number(value, decimals = 2, decPoint = '.', thousandsSeparator = ',', clearDecimals = false) {
  decimals = isNaN(decimals) ? 2 : Math.abs(decimals)

  const sign = value < 0 ? '-' : ''
  value = Math.abs(+value || 0)

  const intPart = parseInt(value.toFixed(decimals), 10) + ''
  const j = intPart.length > 3 ? intPart.length % 3 : 0

  return (
    sign +
    (j ? intPart.slice(0, j) + thousandsSeparator : '') +
    intPart.slice(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSeparator) +
    (decimals
      ? clearDecimals && isInteger(value)
        ? ''
        : decPoint +
          Math.abs(value - intPart)
            .toFixed(decimals)
            .slice(2)
      : '')
  )
}

export function numberRus(value, decimals = 2) {
  return number(value, decimals, '.', ' ', true)
}
