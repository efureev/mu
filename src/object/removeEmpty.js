import isEmpty from '../is/isEmpty'
import isObject from '../is/isObject'
import isString from '../is/isString'
import isArray from '../is/isArray'

/**
 * Remove all empty values in object
 *
 * @param {{}} object
 * @return {{}}
 */
export default function removeEmpty(object) {
  let result = {},
    key

  for (key in object) {
    if (object.hasOwnProperty(key) && !isEmpty(object[key])) {
      if (isObject(object[key])) {
        const r = removeEmpty(object[key])
        // result[key] = removeEmpty(object[key])
        if (!isEmpty(r)) {
          result[key] = r
        }

        continue
      }

      if (isArray(object[key])) {
        const a = []
        object[key].forEach((v) => {
          if (isString(v)) {
            a.push(v)
          } else {
            const r = removeEmpty(v)
            if (!isEmpty(r)) {
              a.push(r)
            }
          }
        })
        if (!isEmpty(a)) {
          result[key] = a
        }

        continue
      }

      result[key] = object[key]
    }
  }

  return result
}
