import isDate from '~/is/isDate'

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
export default function clone<T = NonNullable<any>>(item: T, cloneDom: boolean = true): T {
  if (item === null || item === undefined) {
    return item
  }

  // @ts-ignore
  if (cloneDom && item.nodeType && item.cloneNode) {
    // @ts-ignore
    return item.cloneNode(true)
  }

  // Date
  if (isDate(item)) {
    // @ts-ignore
    return new Date(item.getTime())
  }

  let i: number, j: number, k

  // Array
  if (Array.isArray(item)) {
    i = item.length
    let newClone: Record<number, any> = []

    while (i--) {
      newClone[i] = clone<any>(item[i], cloneDom)
    }

    return <T>newClone
  }

  const type = Object.prototype.toString.call(item)

  // Plain Object
  if (type === '[object Object]' && (item as Object).constructor === Object) {
    const src = item as Record<PropertyKey, any>
    const newClone: Record<PropertyKey, any> = {}

    for (const key in src) {
      if (Object.prototype.hasOwnProperty.call(src, key)) {
        newClone[key] = clone<any>(src[key], cloneDom)
      }
    }

    for (const k of enumerables) {
      if (Object.prototype.hasOwnProperty.call(src, k)) {
        newClone[k] = (src as Record<string, any>)[k]
      }
    }

    // @ts-ignore
    return newClone
  }

  return item
}
