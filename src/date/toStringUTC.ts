import { padDateTime } from '~/format/pad'

/**
 * Date to string in UTC time with explicit 'Z' suffix.
 * Example: 2025-12-04T22:58:00Z
 * This uses UTC getters and is timezone/DST agnostic for output.
 */
export default function toStringUTC(date: Date = new Date()): string {
  return (
    date.getUTCFullYear() +
    '-' +
    padDateTime(date.getUTCMonth() + 1) +
    '-' +
    padDateTime(date.getUTCDate()) +
    'T' +
    padDateTime(date.getUTCHours()) +
    ':' +
    padDateTime(date.getUTCMinutes()) +
    ':' +
    padDateTime(date.getUTCSeconds()) +
    'Z'
  )
}
