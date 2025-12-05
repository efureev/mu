import isEmpty from '~/is/isEmpty'
import isObject from '~/is/isObject'

const FORBIDDEN = new Set<PropertyKey>(['__proto__', 'prototype', 'constructor'])

function isForbiddenKey(key: PropertyKey): boolean {
  return typeof key === 'string' ? FORBIDDEN.has(key) : false
}

/**
 * Build or update a nested object structure by a string path.
 *
 * Security: forbidden keys ("__proto__", "prototype", "constructor") are ignored to prevent prototype pollution.
 *
 * @param paths          Path string, e.g. `"a.b.c"`. If empty, the original object is returned.
 * @param value          Value to set at the terminal key (default: `null`).
 * @param object         Target object to modify (mutates this object as per existing API).
 * @param divider        Path segment divider (default: `'.'`).
 * @param replaceOnExist Replace existing keys along the path (default: `true`).
 * @returns The same `object` reference with the path set (if valid).
 */
export default function pathToObject(
  paths: string = '',
  value: any = null,
  object: Record<PropertyKey, any> = {},
  divider: string = '.',
  replaceOnExist: boolean = true
): Record<PropertyKey, any> {
  if (isEmpty(paths)) {
    return object
  }

  const pathsArray = paths.split(divider),
    pathsCount = pathsArray.length

  let current = object

  for (let i = 0; i < pathsCount; i++) {
    const k = pathsArray[i]

    // Security: skip forbidden keys to avoid prototype pollution
    if (isForbiddenKey(k)) {
      return object
    }

    if (isObject(current)) {
      if (isObject(current[k])) {
        if (pathsCount - 1 === i) {
          current[k] = value
        }
      } else {
        const hasOwn = Object.hasOwn(current, k)
        if ((hasOwn && replaceOnExist) || !hasOwn) {
          current[k] = pathsCount - 1 === i ? value : {}
        }
      }
    }

    current = current[k]
  }

  return object
}
