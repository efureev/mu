'use strict'

/**
 * This function evaluates whether all parameters are function
 * @memberof µ.is
 * @author efureev
 * @param {...*} params - One or more parameters.
 */
export function isFunction(...params) {
    if (params.length === 0) throw Error('Please provide at least one number to evaluate isInteger.')

    const invalid = params.some((param) => {
        const tag = baseGetTag(param)
        return !(tag === funcTag || tag === genTag || tag === asyncTag || tag === proxyTag)
    })

    return !invalid
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag
    }
    return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value)
}


/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
    const
        isOwn = Object.prototype.hasOwnProperty.call(value, symToStringTag),
        tag   = value[symToStringTag]

    let unmasked = false

    try {
        value[symToStringTag] = undefined
        unmasked = true
    } catch (e) {
    }

    const result = objectToString(value)
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag
        } else {
            delete value[symToStringTag]
        }
    }
    return result
}

function objectToString(value) {
    return Object.prototype.toString.call(value)
}

const symToStringTag = Symbol ? Symbol.toStringTag : undefined

const
    asyncTag     = '[object AsyncFunction]',
    funcTag      = '[object Function]',
    genTag       = '[object GeneratorFunction]',
    nullTag      = '[object Null]',
    proxyTag     = '[object Proxy]',
    undefinedTag = '[object Undefined]'
