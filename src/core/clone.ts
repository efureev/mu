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

  const type = Object.prototype.toString.call(item)

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

  // Object
  if (type === '[object Object]' && (<Object>item).constructor === Object) {
    let key: PropertyKey
    let newClone: Record<PropertyKey, any> = {}

    for (key in item) {
      newClone[key] = clone<any>((<Record<PropertyKey, any>>item)[key], cloneDom)
    }

    if (enumerables) {
      for (j = enumerables.length; j--; ) {
        let k: string = enumerables[j]
        if (Object.prototype.hasOwnProperty.call(item, k)) {
          newClone[k] = (<Record<string, any>>item)[k]
        }
      }
    }

    return newClone
  }

  return item
}
