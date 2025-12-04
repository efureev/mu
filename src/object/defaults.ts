import clone from '~/core/clone'
import isObject from '~/is/isObject'

type RecordAny = Record<PropertyKey, any>

// Узкое определение plain object без опоры на constructor
function isPlainObject(val: any): val is RecordAny {
  if (!isObject(val)) return false
  const proto = Object.getPrototypeOf(val)
  return proto === Object.prototype || proto === null
}

const FORBIDDEN_KEYS = new Set<PropertyKey>(['__proto__', 'prototype', 'constructor'])

function isForbiddenKey(key: PropertyKey): boolean {
  return typeof key === 'string' ? FORBIDDEN_KEYS.has(key) : false
}

function ownEnumerableKeys(obj: object): PropertyKey[] {
  const keys: PropertyKey[] = Object.keys(obj)
  const symbols = Object.getOwnPropertySymbols(obj).filter(sym => {
    const desc = Object.getOwnPropertyDescriptor(obj, sym)
    return !!desc?.enumerable
  })
  return keys.concat(symbols)
}

function shallowCopyWithSymbols<T extends RecordAny>(obj: T): T {
  const res: any = { ...obj }
  for (const sym of Object.getOwnPropertySymbols(obj)) {
    const desc = Object.getOwnPropertyDescriptor(obj, sym)
    if (desc?.enumerable) {
      res[sym] = (obj as any)[sym]
    }
  }
  return res
}

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @example
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */

export default function defaults(origin: RecordAny, ...sources: RecordAny[]): RecordAny {
  // Иммутабельность: не мутируем origin
  const result: RecordAny = isPlainObject(origin) ? shallowCopyWithSymbols(origin) : origin

  for (const source of sources) {
    if (!isObject(source)) continue

    for (const key of ownEnumerableKeys(source)) {
      if (isForbiddenKey(key)) continue

      const srcVal = (source as any)[key]
      const hasOwn = Object.hasOwn(result, key)
      const dstVal = hasOwn ? (result as any)[key] : undefined

      // Если ключ уже существует в результате
      if (hasOwn) {
        // Глубокая установка defaults для plain-objects
        if (isPlainObject(dstVal) && isPlainObject(srcVal)) {
          ;(result as any)[key] = defaults(dstVal, srcVal)
        }
        // Во всех остальных случаях — ничего не делаем (не переопределяем, даже если undefined)
        continue
      }

      // Ключа нет — можно задать значение по умолчанию из источника
      if (isPlainObject(srcVal)) {
        ;(result as any)[key] = defaults({}, srcVal)
        continue
      }

      if (Array.isArray(srcVal)) {
        ;(result as any)[key] = clone(srcVal)
        continue
      }

      ;(result as any)[key] = srcVal
    }
  }

  return result
}
