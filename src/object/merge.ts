import clone from '../core/clone'
import isObject from '../is/isObject'

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
 */
type record = Record<PropertyKey, any>

export default function merge<T extends Partial<record>>(original: Partial<T>, ...values: Partial<T>[]): T {
  const ln = values.length
  let i = 0,
    object: Partial<T>,
    key: PropertyKey,
    value: any,
    sourceKey: any

  for (; i < ln; i++) {
    object = values[i]
    if (!isObject(object)) {
      continue
    }
    for (key in object) {
      value = object[key]
      if (value && value.constructor === Object) {
        sourceKey = original[key]
        if (sourceKey && sourceKey.constructor === Object) {
          merge<T>(sourceKey, value)
        } else {
          ;(<T>original[key]) = clone<T>(value)
        }
      } else {
        ;(<T>original[key]) = value
      }
    }
  }

  return <T>original
}
