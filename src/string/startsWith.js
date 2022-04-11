import toString from '../to/toString.js'

/**
 * Checks if string starts with the given target string
 *
 * @param {string} string
 * @param {string} target
 * @returns {boolean}
 */
export default function (string, target) {
  target = toString(target)

  return toString(string).slice(0, target.length) === target
}
