import { isEmpty, isString, isArray, isObject } from '../is'

/**
 * Remove all empty values in object
 *
 * @param {{}} object
 * @return {{}}
 */
export default function removeEmpty(object: Record<PropertyKey, any>): Record<PropertyKey, any> {
  let result: Record<PropertyKey, any> = {},
    key: PropertyKey

  for (key in object) {
    if (object.hasOwnProperty(key) && !isEmpty(object[key])) {
      if (isObject(object[key])) {
        const r = removeEmpty(object[key])
        if (!isEmpty(r)) {
          result[key] = r
        }

        continue
      }

      if (isArray(object[key])) {
        const a: any[] = []
        object[key].forEach((v: any) => {
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
