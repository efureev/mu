import clone from '../core/clone.js'
import isObject from '../is/isObject.js'

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @category Object
 * @param {Object} destination The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */

export default function defaults(destination) {
  const ln = arguments.length
  let i = 1,
    object,
    key,
    value,
    sourceKey

  for (; i < ln; i++) {
    object = arguments[i]
    if (!isObject(object)) {
      continue
    }
    for (key in object) {
      value = object[key]
      if (value && value.constructor === Object) {
        sourceKey = destination[key]
        if (sourceKey && sourceKey.constructor === Object) {
          defaults(sourceKey, value)
        } else {
          destination[key] = clone(value)
        }
      } else {
        if (!Object.prototype.hasOwnProperty.call(destination, key)) {
          destination[key] = value
        }
      }
    }
  }

  return destination
}
