'use strict'

import {toString} from '../index'

/**
 * Checks if string starts with the given target string
 *
 * @param {string} str
 * @param {string} target
 * @returns {boolean}
 */
export default function (str, target) {
    target = toString(target)

    return toString(str).slice(0, target.length) === target
}
