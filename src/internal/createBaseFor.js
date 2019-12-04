'use strict'

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {function({Object}, {Function}, {Function}): *}
 */
export default function createBaseFor(fromRight = false) {
    return function (object, iteratee, keysFunc) {
        let index    = -1,
            iterable = Object(object),
            props    = keysFunc(object),
            length   = props.length,
            key

        while (length--) {
            key = props[fromRight ? length : ++index]
            if (iteratee(iterable[key], key, iterable) === false) {
                break
            }
        }
        return object
    }
}
