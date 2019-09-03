'use strict'

import {isInteger} from '../is'

/**
 * Formatting number
 * @param {String|Number} number
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSep
 * @param {Boolean} clearDecimals
 * @returns {string}
 */
export default function num(number, decimals = 2, decPoint = '.', thousandsSep = ',', clearDecimals = false) {

    decimals = isNaN(decimals) ? 2 : Math.abs(decimals)

    const sign = number < 0 ? '-' : ''
    number = Math.abs(+number || 0)

    const intPart = parseInt(number.toFixed(decimals), 10) + ''
    const j = intPart.length > 3 ? intPart.length % 3 : 0

    return sign +
        (j ? intPart.substr(0, j) + thousandsSep : '') +
        intPart.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSep) +
        (
            decimals
                ?
                (clearDecimals && isInteger(number)
                    ? ''
                    : decPoint + Math.abs(number - intPart).toFixed(decimals).slice(2))
                : ''
        )
}

export function numRus(number, decimals = 2) {
    return num(number, decimals, '.', ' ', true)
}
