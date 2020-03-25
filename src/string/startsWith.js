'use strict'

import { toString } from '..'

/**
 * Checks if string starts with the given target string
 *
 * @param {string} str
 * @param {string} target
 * @returns {boolean}
 */
export default function (string, target) {
  target = toString(target)

  return toString(string).slice(0, target.length) === target
}
