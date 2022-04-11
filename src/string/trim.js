import toString from '../to/toString.js'
import { reTrim } from '../core/vars.js'

/**
 * This function trim string
 *
 * @param {string} string
 * @returns {string}
 */
export default function trim(string) {
  string = toString(string)

  if (!string) {
    return string
  }

  return string.replace(reTrim, '')
}
