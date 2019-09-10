'use strict'

import {toString} from '../'
import endsWith from './endsWith'
import startsWith from './startsWith'
import padStart from '../string/padStart'

export const reTrim = /^\s+|\s+$/g

/** Used to detect binary string values. */
export const reIsBinary = /^0b[01]+$/i

/** Used to detect octal string values. */
export const reIsOctal = /^0o[0-7]+$/i

/** Used to detect bad signed hexadecimal string values. */
export const reIsBadHex = /^[-+]0x[0-9a-f]+$/i

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

export {
    endsWith,
    startsWith,
    padStart,
}
