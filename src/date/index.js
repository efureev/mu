import { padDateTime } from '../format'

const nowFn =
  Date.now ||
  function () {
    return new Date().getTime()
  }

/**
 * This function return Date now
 *
 * @memberof µ.date
 * @author efureev
 */
export function now() {
  return nowFn()
}

/**
 * Date to string
 * @param {Date|null} date
 * @returns {string}
 */
export function toString(date) {
  if (!date) {
    date = new Date()
  }

  return (
    date.getFullYear() +
    '-' +
    padDateTime(date.getMonth() + 1) +
    '-' +
    padDateTime(date.getDate()) +
    'T' +
    padDateTime(date.getHours()) +
    ':' +
    padDateTime(date.getMinutes()) +
    ':' +
    padDateTime(date.getSeconds())
  )
}
