'use strict'

import {intWord} from './intWord'

/**
 *
 * @param {Number|String} size
 * @param {Number} kilo
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSep
 * @param {String} suffixSep
 * @returns {string}
 */
export function fileSize(size, kilo = 1024, decimals = 2, decPoint = '.', thousandsSep = ',', suffixSep = ' ') {
    if (size <= 0) {
        return '0 bytes'
    }
    if (size < kilo) {
        decimals = 0
    }

    return intWord(size, ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb'], kilo, decimals, decPoint, thousandsSep, suffixSep)
}
