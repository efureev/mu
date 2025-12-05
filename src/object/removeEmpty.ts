import isObject from '~/is/isObject'
import isString from '~/is/isString'
import isEmpty from '~/is/isEmpty'

/**
 * Remove all empty values in object
 *
 * @param {{}} object
 * @return {{}}
 */
export default function removeEmpty(object: Record<PropertyKey, any>): Record<PropertyKey, any> {
  const result: Record<PropertyKey, any> = {}

  for (const [key, value] of Object.entries(object)) {
    if (isEmpty(value)) {
      continue
    }

    // Сначала массивы, затем plain-объекты
    if (Array.isArray(value)) {
      const a: any[] = []
      for (const v of value) {
        if (isString(v)) {
          a.push(v)
        } else {
          const r = removeEmpty(v as any)
          if (!isEmpty(r)) {
            a.push(r)
          }
        }
      }
      if (!isEmpty(a)) {
        result[key] = a
      }
      continue
    }

    if (isObject(value)) {
      const r = removeEmpty(value)
      if (!isEmpty(r)) {
        result[key] = r
      }
      continue
    }

    result[key] = value
  }

  return result
}
