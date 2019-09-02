'use strict'

import {pad} from './../number'

const nowFn = Date.now || function () {
    return new Date().getTime()
}

/**
 * This function return Date now
 *
 * @memberof µ.date
 * @author efureev
 */
export function now() {
    return nowFn()
}

/**
 * Date to string
 * @param {Date|null} date
 * @returns {string}
 */
export function toString(date) {

    if (!date) {
        date = new Date()
    }

    return date.getFullYear() + '-'
        + pad(date.getMonth() + 1) + '-'
        + pad(date.getDate()) + 'T'
        + pad(date.getHours()) + ':'
        + pad(date.getMinutes()) + ':'
        + pad(date.getSeconds())
}
