'use strict'

import { toString } from '..'

/**
 * Checks if string ends with the given target string
 *
 * @param {string} str
 * @param {string} target
 * @returns {boolean}
 */
export default function (string, target) {
  string = toString(string)
  target = toString(target)

  let position = string.length
  const end = position

  position -= target.length

  return position >= 0 && string.slice(position, end) === target
}
