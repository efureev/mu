import startsWith from './startsWith'

/**
 * Remove a prefix from a String
 *
 * @param {string} str
 * @param {string} prefix
 * @returns {string}
 */
export default function trimPrefix(str: string, prefix: string): string {
  if (!str || !prefix || !startsWith(str, prefix)) {
    return str
  }

  return str.substring(prefix.length)
}
