'use strict'

import {equals as equalsObject} from './../object'
import {equals as equalsArray} from './../array'
import {isArray, isObject} from '../is'

/**
 *
 * @param first
 * @param second
 * @returns {string|boolean}
 */
export default function equals(first, second) {

    if (first === second) {
        return true
    }

    const typeFirst = typeof first
    const typeSecond = typeof second

    if (typeFirst !== typeSecond) {
        return false
    }
    switch (typeFirst) {
    case 'string':
        return first === second
    case 'number':
        return first === second
    case 'object':
        if (isArray(first) && isArray(second)) {
            return equalsArray(first, second)
        }

        if (isObject(first) && isObject(second)) {
            return equalsObject(first, second)
        }
        break
    case 'boolean':
        return first === second
    case 'function':
        if ((first instanceof Date && second instanceof Date) ||
            (first instanceof RegExp && second instanceof RegExp) ||
            (first instanceof String && second instanceof String) ||
            (first instanceof Number && second instanceof Number)) {
            return first.toString() === second.toString()
        }
    }

    return false
}
