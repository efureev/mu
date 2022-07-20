import endsWith from './endsWith.js'

/**
 * Remove a suffix from a String
 *
 * @param {string} str
 * @param {string} suffix
 * @returns {string}
 */
export default function (str, suffix) {
  if (!str || !suffix || !endsWith(str, suffix)) {
    return str
  }
  return str.substring(0, str.length - suffix.length)
}
