/** Used for built-in method references. */
import isPrototype from '../isPrototype'

const objectProto = Object.prototype

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty

const nativeKeys = (arg) => Object.keys(Object(arg))

/**
 * The base implementation of `keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
export default function baseKeys(object) {
    if (!isPrototype(object)) {
        return nativeKeys(object)
    }
    const result = []
    let key

    for (key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key !== 'constructor') {
            result.push(key)
        }
    }
    return result
}
