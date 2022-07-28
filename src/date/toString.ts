import { padDateTime } from '../format'

/**
 * Date to string
 * @param {Date|null} date
 * @returns {string}
 */
export default function toString(date: Date = new Date()) {
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
