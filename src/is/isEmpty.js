'use strict'

import {isEmptyObject} from './isObject'

/**
 * This function evaluates if all the parameters are empty
 *
 * @memberof µ.is
 * @author efureev
 * @param {...*} params - One or more parameters.
 */
export function isEmpty(...params) {
    const invalid = params.some((param) => {
        switch (Object.prototype.toString.call(param)) {
        case '[object String]':
            if (param.trim().length) return true
            break
        case '[object Number]':
            if (param !== 0) return true
            break
        case '[object Date]':
            return true
        case '[object Array]':
            return param.length !== 0
        case '[object Boolean]':
            return param === false
        case '[object Object]':
            return !isEmptyObject(param)
            // case '[object Function]':
            // case '[object AsyncFunction]':
            // case '[object Undefined]':
            // case '[object Null]':

        }
        return false
    })

    return !invalid
}
