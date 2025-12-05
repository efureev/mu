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
 * Apply default values from one or more source objects to an origin object without mutation.
 *
 * Semantics (v5, ESM-only, Node 22+):
 * - Immutability: returns a new object; `origin` and `sources` are not mutated.
 * - Keys: only own enumerable string and symbol keys from sources are considered; inherited/non-enumerable are ignored.
 * - Guards: forbidden keys `"__proto__"`, `"prototype"`, `"constructor"` are skipped (proto-pollution safe).
 * - Deep behavior: if both destination and source values are plain objects, defaults are applied recursively.
 * - Arrays: when setting a missing key from a source array, the array is cloned (not referenced). Arrays are not deep-merged.
 * - Presence rule: a key is considered present in destination if it exists as an own property, even if its value is `undefined` or `null` — such keys are not overwritten.
 *
 * @example
 * defaults({ a: { b: 2 } }, { a: { b: 1, c: 3 } })
 * // => { a: { b: 2, c: 3 } }
 *
 * @param origin   The base object to apply defaults onto (not mutated).
 * @param sources  One or more source objects providing default values (left-to-right).
 * @returns A new object with defaults applied.
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
