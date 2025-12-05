import isNil from '~/is/isNil'
import isNumeric from '~/is/isNumeric'
import type { TextNumber } from '~/internal/types'

const queryRe = /^\?/
const keyRe = /(\[):?([^\]]*)]/g
const nameRe = /^([^[]+)/ // eslint-disable-line no-useless-escape

type FromQueryStringOptions = {
  decodeName: boolean
}

/**
 * Converts a query string back into an object.
 *
 * Implementation notes (v5):
 * - Uses native `URLSearchParams` for decoding; input may start with leading `?`.
 * - When `recursive=false` (default), repeated keys become arrays, otherwise the Rails-style
 *   bracket syntax is parsed to objects/arrays (e.g., `a[b]=1&a[c]=2`, `arr[0]=x`).
 * - Security: forbidden keys (`"__proto__"`, `"prototype"`, `"constructor"`) are ignored at all nesting levels
 *   to prevent prototype pollution.
 *
 * @example
 *  fromQueryString("foo=1&bar=2"); // returns {foo: '1', bar: '2'}
 *  fromQueryString("foo=&bar=2"); // returns {foo: '', bar: '2'}
 *  fromQueryString("some%20price=%24300"); // returns {'some price': '$300'}
 *  fromQueryString("colors=red&colors=green&colors=blue"); // returns {colors: ['red', 'green', 'blue']}
 *
 *
 * @param queryString The query string to decode.
 * @param recursive   True to interpret bracket syntax and build nested structures.
 * @param options     Options bag: `{ decodeName: boolean }` (names are already decoded by URLSearchParams).
 * @returns A plain object constructed from the query string.
 */
export default function fromQueryString(
  queryString: string,
  recursive: boolean = false,
  options: FromQueryStringOptions = { decodeName: true }
): Record<string, any> {
  if (isNil(queryString)) {
    return {}
  }

  const qs = String(queryString).replace(queryRe, '')
  const params = new URLSearchParams(qs)
  const object = Object.create(null) as Record<string, any>

  let temporary: any
  let matchedKeys: RegExpMatchArray | null
  let matchedName: RegExpMatchArray | null
  let keys: string[]
  let key: string
  let nextKey: string

  const FORBIDDEN = new Set(['__proto__', 'prototype', 'constructor'])

  function isForbiddenKey(key: string): boolean {
    return FORBIDDEN.has(key)
  }

  for (const [rawName, rawValue] of params) {
    const name = options.decodeName ? rawName : rawName // already decoded by URLSearchParams
    const value = rawValue // already decoded

    if (!recursive) {
      if (Object.hasOwn(object, name)) {
        if (!Array.isArray(object[name])) {
          object[name] = [object[name]]
        }
        object[name].push(value)
      } else {
        if (!isForbiddenKey(name)) {
          object[name] = value
        }
      }
      continue
    }

    matchedKeys = name.match(keyRe)
    matchedName = name.match(nameRe)

    if (!matchedName) {
      // skip malformed entries instead of throwing to be more forgiving
      continue
    }

    const top = matchedName[0]
    if (isForbiddenKey(top)) {
      continue
    }
    keys = []

    if (matchedKeys === null) {
      object[top] = value
      continue
    }

    for (let j = 0, subLn = matchedKeys.length; j < subLn; j++) {
      key = matchedKeys[j]
      key = key.length === 2 ? '' : key.substring(1, key.length - 1)
      keys.push(key)
    }

    keys.unshift(top)

    temporary = object

    for (let j = 0, subLn = keys.length; j < subLn; j++) {
      key = keys[j]
      if (isForbiddenKey(key)) {
        break
      }

      if (j === subLn - 1) {
        if (Array.isArray(temporary) && key === '') {
          temporary.push(value)
        } else {
          temporary[key] = value
        }
      } else {
        if (temporary[key] === undefined || typeof temporary[key] === 'string') {
          nextKey = keys[j + 1]
          temporary[key] = isNumeric(nextKey) || nextKey === '' ? [] : {}
        }
        temporary = temporary[key]
      }
    }
  }

  return object
}
