import clone from '../core/clone.js'
import isObject from '../is/isObject.js'

/**
 * Merge objects recursively
 *
 *     var js = {
 *         companyName: 'JS',
 *         products: ['JS', 'GWT', 'Designer'],
 *         isSuperCool: true,
 *         office: {
 *             size: 2000,
 *             location: 'Palo Alto',
 *             isFun: true
 *         }
 *     };
 *
 *     var newStuff = {
 *         companyName: 'Jacksonville',
 *         products: ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
 *         office: {
 *             size: 40000,
 *             location: 'Redwood City'
 *         }
 *     };
 *
 *     const result = merge(js, newStuff);
 *
 *     // extjs and sencha then equals to
 *     {
 *         companyName: 'Jacksonville',
 *         products: ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
 *         isSuperCool: true,
 *         office: {
 *             size: 40000,
 *             location: 'Redwood City',
 *             isFun: true
 *         }
 *     }
 *
 * @param {Object} destination The object into which all subsequent objects are merged.
 * @param {Object...} [object...] Any number of objects to merge into the destination.
 * @return {Object} merged The destination object with all passed objects merged in.
 */
export default function merge(destination) {
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
          merge(sourceKey, value)
        } else {
          destination[key] = clone(value)
        }
      } else {
        destination[key] = value
      }
    }
  }

  return destination
}
