/**
 *
 * @param {string} property
 * @param {boolean} asc
 * @param {boolean} ignoreCase
 * @return {(function(*, *): (number))|*}
 */
import isString from '~/is/isString'

export default function sortByProperty(property: string, asc: boolean = true, ignoreCase: boolean = true) {
  return function (a: Record<PropertyKey, any>, b: Record<PropertyKey, any>) {
    let aProp = a[property]
    if (ignoreCase && isString(aProp)) {
      aProp = aProp.toUpperCase()
    }

    let bProp = b[property]
    if (ignoreCase && isString(bProp)) {
      bProp = bProp.toUpperCase()
    }

    if (aProp > bProp) {
      return asc ? 1 : -1
    }

    if (aProp < bProp) {
      return asc ? -1 : 1
    }

    return 0
  }
}
