'use strict'

import {toString} from '../'

export const reTrim = /^\s+|\s+$/g

/**
 * This function trim string
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

/**
 * Converts the first character of string to upper case
 *
 * @param {string} str
 * @returns {string}
 */
export function upperFirst(str) {
    const strTrim = str.trim()
    return strTrim.charAt(0).toUpperCase() + strTrim.substr(1).toLowerCase()
}

/**
 * Converts the first character of every word into string to upper case
 *
 * @param {string} str
 * @returns {string}
 */
export function titleCase(str) {
    return clearSpaces(str).replace(
        /\w\S*/g,
        (txt) => upperFirst(txt),
    )
}

/**
 * Remove extra spaces from string
 *
 * @param {string} str
 * @returns {string}
 */
export function clearSpaces(str) {
    return str.toString().replace(/\s+/g, ' ').trim()
}
