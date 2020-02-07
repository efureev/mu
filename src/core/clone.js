'use strict'

const enumerables = ['valueOf', 'toLocaleString', 'toString', 'constructor']

/**
 * Clone simple variables including array, {}-like objects, DOM nodes and Date without
 * keeping the old reference. A reference for the object itself is returned if it's not
 * a direct descendant of Object.
 *
 * @param {Object} item The variable to clone
 * @param {Boolean} [cloneDom=true] `true` to clone DOM nodes.
 * @return {Object} clone
 */
export default function clone(item, cloneDom = true) {
  if (item === null || item === undefined) {
    return item
  }

  if (cloneDom !== false && item.nodeType && item.cloneNode) {
    return item.cloneNode(true)
  }

  const type = Object.prototype.toString.call(item)
  let i, j, k, newClone, key

  // Date
  if (type === '[object Date]') {
    return new Date(item.getTime())
  }

  // Array
  if (type === '[object Array]') {
    i = item.length

    newClone = []

    while (i--) {
      newClone[i] = clone(item[i], cloneDom)
    }
  }
  // Object
  else if (type === '[object Object]' && item.constructor === Object) {
    newClone = {}

    for (key in item) {
      newClone[key] = clone(item[key], cloneDom)
    }

    if (enumerables) {
      for (j = enumerables.length; j--; ) {
        k = enumerables[j]
        if (Object.prototype.hasOwnProperty.call(item, k)) {
          newClone[k] = item[k]
        }
      }
    }
  }

  return newClone || item
}
