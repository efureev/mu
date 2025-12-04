import isNil from '~/is/isNil'
import isNumeric from '~/is/isNumeric'
import type { TextNumber } from '~/internal/types'

const queryRe = /^\?/
const plusRe = /\+/g
const keyRe = /(\[):?([^\]]*)]/g
const nameRe = /^([^[]+)/ // eslint-disable-line no-useless-escape

type FromQueryStringOptions = {
  decodeName: boolean
}

/**
 * Converts a query string back into an object.
 *
 * Non-recursive:
 *
 *     fromQueryString("foo=1&bar=2"); // returns {foo: '1', bar: '2'}
 *     fromQueryString("foo=&bar=2"); // returns {foo: '', bar: '2'}
 *     fromQueryString("some%20price=%24300"); // returns {'some price': '$300'}
 *     fromQueryString("colors=red&colors=green&colors=blue"); // returns {colors: ['red', 'green', 'blue']}
 *
 * Recursive:
 *
 *     fromQueryString(
 *         "username=Jacky&"+
 *         "dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&"+
 *         "hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&"+
 *         "hobbies[3][0]=nested&hobbies[3][1]=stuff", true);
 *
 *     // returns
 *     {
 *         username: 'Jacky',
 *         dateOfBirth: {
 *             day: '1',
 *             month: '2',
 *             year: '1911'
 *         },
 *         hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
 *     }
 *
 * @param {String|null} queryString The query string to decode
 * @param {Boolean} [recursive=false] Whether or not to recursively decode the string. This format is supported by
 * @param {Object} options = {
 *   - decodeName {Boolean} Decode KeyNames in the queryString
 * }
 * PHP / Ruby on Rails servers and similar.
 * @return {Object}
 * @todo write tests
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
  let nextKey: TextNumber

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
