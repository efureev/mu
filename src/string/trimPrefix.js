import startsWith from './startsWith.js'

/**
 * Remove a prefix from a String
 *
 * @param {string} str
 * @param {string} prefix
 * @returns {string}
 */
export default function (str, prefix) {
  if (!str || !prefix || !startsWith(str, prefix)) {
    return str
  }

  return str.substring(prefix.length)
}
