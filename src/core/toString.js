'use strict'

import {reTrim} from './../string'

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @memberof µ
 * @author efureev
 *
 * @param {*} value
 * @returns {string}
 */
export default function toString(value) {

    switch (typeof value) {
    case 'string':
        return value.replace(reTrim, '')
    case 'number':
        return value.toString()
    case 'object':
        return value === null ? '' : JSON.stringify(value)
    case 'boolean':
        return value ? 'true' : 'false'
    }

    if (!value) {
        return ''
    }

    return value + ''
}
