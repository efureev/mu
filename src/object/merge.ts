import clone from '~/core/clone'
import isObject from '~/is/isObject'

type record = Record<PropertyKey, any>

// Узкое определение plain object без опоры на constructor
function isPlainObject(val: any): val is Record<PropertyKey, any> {
  if (!isObject(val)) return false
  const proto = Object.getPrototypeOf(val)
  return proto === Object.prototype || proto === null
}

/**
 * Merge objects recursively
 */
export default function merge<T extends Partial<record>>(original: Partial<T>, ...values: Partial<T>[]): T {
  for (let i = 0; i < values.length; i++) {
    const object = values[i]
    if (!isObject(object)) {
      continue
    }

    for (const key in object) {
      if (!Object.prototype.hasOwnProperty.call(object, key)) continue

      const value = (object as any)[key]
      const target = (original as any)[key]

      // Массивы: перезаписываем клоном (предсказуемее, чем неявные стратегии)
      if (Array.isArray(value)) {
        ;(original as any)[key] = clone(value)
        continue
      }

      if (isPlainObject(value)) {
        if (isPlainObject(target)) {
          merge(target, value)
        } else {
          ;(original as any)[key] = clone(value)
        }
      } else {
        ;(original as any)[key] = value
      }
    }
  }

  return original as T
}
