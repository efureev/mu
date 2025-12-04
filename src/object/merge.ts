import clone from '~/core/clone'
import isObject from '~/is/isObject'

type record = Record<PropertyKey, any>

// Узкое определение plain object без опоры на constructor
function isPlainObject(val: any): val is Record<PropertyKey, any> {
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

/**
 * Merge two or more objects into a new one (immutable deep merge for plain objects).
 *
 * Semantics (v5, ESM-only, Node 22+):
 * - Immutability: returns a new object; inputs are not mutated.
 * - Keys: only own enumerable string and symbol keys are processed.
 * - Guards: forbidden keys "__proto__", "prototype", "constructor" are ignored (proto-pollution safe).
 * - Depth: deep merge only occurs for plain objects (prototype is Object.prototype or null).
 * - Arrays: arrays from sources replace destination values with a cloned array (no element-wise merge).
 * - Other types (Date, Map, Set, functions, class instances): copied as values; plain-object rules do not apply.
 *
 * @example
 * merge({ a: 1, o: { x: 1 } }, { b: 2, o: { y: 2 } })
 * // => { a: 1, b: 2, o: { x: 1, y: 2 } }
 */
export default function merge<T extends Partial<record>>(original: Partial<T>, ...values: Partial<T>[]): T {
  // Иммутабельность: не мутируем входной объект
  const result: any = isPlainObject(original) ? { ...(original as any) } : (original as any)

  for (let i = 0; i < values.length; i++) {
    const source = values[i]
    if (!isObject(source)) continue

    for (const key of ownEnumerableKeys(source)) {
      if (isForbiddenKey(key)) continue

      const value = (source as any)[key]
      const target = (result as any)[key]

      // Arrays: replace with a cloned array for predictability
      if (Array.isArray(value)) {
        ;(result as any)[key] = clone(value)
        continue
      }

      // Plain objects: deep merge
      if (isPlainObject(value)) {
        if (isPlainObject(target)) {
          ;(result as any)[key] = merge(target, value)
        } else {
          ;(result as any)[key] = clone(value)
        }
        continue
      }

      // Primitives and other types: direct assignment
      ;(result as any)[key] = value
    }
  }

  return result as T
}
