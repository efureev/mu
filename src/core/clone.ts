import isDate from '~/is/isDate'

// Helpers
function isPlainObject(val: any): val is Record<PropertyKey, any> {
  if (val === null || typeof val !== 'object') return false
  const proto = Object.getPrototypeOf(val)
  return proto === Object.prototype || proto === null
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
 * Deep clone with Node 22 strategy.
 * - Plain objects and arrays: recursively clone over own enumerable string and symbol keys only.
 * - Date: cloned by value via new Date(time).
 * - DOM nodes (when cloneDom=true): uses node.cloneNode(true).
 * - Other objects (Map, Set, RegExp, TypedArrays, ArrayBuffer, URL, etc.):
 *   attempted via structuredClone; on failure, return original reference.
 * - Functions/classes/instances with custom prototypes: returned as-is (by reference).
 *
 * Limitations:
 * - Accessors/descriptors are not preserved; enumerable data properties only for plain objects.
 * - Prototypes for plain objects are normalized to Object.prototype (or null if origin had null-proto).
 */
export default function clone<T = NonNullable<any>>(item: T, cloneDom: boolean = true): T {
  // Nullish or primitive
  if (item == null || (typeof item !== 'object' && typeof item !== 'function')) {
    return item as T
  }

  // DOM Node clone (duck-typed)
  // @ts-ignore
  if (cloneDom && (item as any).nodeType && typeof (item as any).cloneNode === 'function') {
    // @ts-ignore
    return (item as any).cloneNode(true)
  }

  // Date
  if (isDate(item)) {
    // @ts-ignore
    return new Date((item as Date).getTime())
  }

  // Array
  if (Array.isArray(item)) {
    const src = item as unknown as any[]
    const out: any[] = new Array(src.length)
    for (let i = 0; i < src.length; i++) {
      out[i] = clone(src[i], cloneDom)
    }
    return out as unknown as T
  }

  // Plain Object
  if (isPlainObject(item)) {
    const src = item as unknown as Record<PropertyKey, any>
    const out: Record<PropertyKey, any> = Object.create(Object.getPrototypeOf(src))
    for (const key of ownEnumerableKeys(src)) {
      out[key] = clone(src[key], cloneDom)
    }
    return out as unknown as T
  }

  // For other complex objects (Map, Set, RegExp, TypedArrays, etc.)
  // try structuredClone if available; fall back to reference if it throws.
  try {
    // @ts-ignore Node 22 global
    if (typeof structuredClone === 'function') {
      // @ts-ignore
      return structuredClone(item)
    }
  } catch (_) {
    // fallthrough to return original item
  }

  // As-is for functions/classes and unsupported cases
  return item
}
