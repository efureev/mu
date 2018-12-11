'use strict'

import {isString} from './is'
import {isEmpty} from './is/isEmpty'
import {INFINITY} from './config'

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
export function toString(value) {

    if (isString(value)) {
        return value
    }
    if (isEmpty(value)) {
        return ''
    }
    const result = (value + '')

    return (result === '0' && (1 / value) === -INFINITY) ? '-0' : result
}
