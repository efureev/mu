'use strict'

import {clone} from '..'
import {isObject} from '../is'

export default function defaults(destination) {
  const ln = arguments.length
  let i = 1,
    object,
    key,
    value,
    sourceKey

  for (; i < ln; i++) {
    object = arguments[i]
    if (!isObject(object)) {
      continue
    }
    for (key in object) {
      value = object[key]
      if (value && value.constructor === Object) {
        sourceKey = destination[key]
        if (sourceKey && sourceKey.constructor === Object) {
          defaults(sourceKey, value)
        } else {
          destination[key] = clone(value)
        }
      } else {
        if (!Object.prototype.hasOwnProperty.call(destination, key)) {
          destination[key] = value
        }
      }
    }
  }

  return destination
}
