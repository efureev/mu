import { padDateTime } from '~/format/pad'

/**
 * Date to string in LOCAL time (no timezone suffix).
 * Example: 2025-12-04T22:58:00
 * Note: this uses local getters and is affected by the environment timezone and DST rules.
 */
export default function toString(date: Date = new Date()): string {
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
