import root from '../root'
import getRawTag from '../getRawTag'

const
    nullTag        = '[object Null]',
    undefinedTag   = '[object Undefined]',
    symToStringTag = root.Symbol ? root.Symbol.toStringTag : undefined


/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
export default function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag
    }
    return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : Object.prototype.toString.call(value)
}
