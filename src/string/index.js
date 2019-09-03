'use strict'

import {toString} from '../'

export const reTrim = /^\s+|\s+$/g

/**
 * This function trim string
 *
 * @memberof µ.string
 * @author efureev
 *
 * @param {string} str
 * @returns {string}
 */
export function trim(str) {
    str = toString(str)

    if (!str) {
        return str
    }

    return str.replace(reTrim, '')
}
