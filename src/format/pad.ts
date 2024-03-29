import { padStart } from '~/string/pad'
import isNil from '~/is/isNil'
import type { TextNumberNullable } from '~/internal/types'

export function padNumber(value: TextNumberNullable, targetLength: number) {
  if (isNil(value)) {
    return '0'
  }
  return padStart(value, targetLength, '0')
}

export function padDateTime(value: TextNumberNullable) {
  if (isNil(value)) {
    return '00'
  }
  return padStart(value, 2, '0')
}
