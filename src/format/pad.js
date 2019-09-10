'use strict'

import {padStart} from '../string'
import {isNil} from '../is'

/**
 * @param {String|Number} str
 * @param {Number} targetLength
 * @returns {string}
 */
export function padNumber(str, targetLength) {
    if (isNil(str)) {
        return '0'
    }
    return padStart(str, targetLength, '0')
}

/**
 * @param {String|Number} str
 * @returns {string}
 */
export function padDateTime(str) {
    if (isNil(str)) {
        return '00'
    }
    return padStart(str, 2, '0')
}
