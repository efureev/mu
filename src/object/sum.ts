import type { TextNumber } from '~/internal/types'
import isNil from '~/is/isNil'
import isNumeric from '~/is/isNumeric'

export default function sum(object: Record<PropertyKey, TextNumber | boolean | Function>): number {
  let result = 0
  for (const key in object) {
    let value = object[key]
    if (value instanceof Function) {
      value = value()
    }

    if (isNil(value) || value === false) {
      value = 0
    }
    if (!isNumeric(value)) {
      value = 1
    }

    result += <number>value
  }

  return result
}
