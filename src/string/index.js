import trim from './trim.js'
import endsWith from './endsWith.js'
import { hasUnicode } from './unicode.js'
import startsWith from './startsWith.js'
import padStart, { pad, padEnd } from '../string/padStart.js'
import strtr, { replaceByTemplate } from '../string/strtr.js'
import camelCase, { pascalCase } from '../string/camelCase.js'

/**
 * Converts the first character of string to upper case
 *
 * @param {string} string
 * @returns {string}
 */
export function upperFirst(string) {
  const stringTrim = string.trim()
  return stringTrim.charAt(0).toUpperCase() + stringTrim.slice(1).toLowerCase()
}

/**
 * Converts the first character of every word into string to upper case
 *
 * @param {string} string
 * @returns {string}
 */
export function titleCase(string) {
  return clearSpaces(string).replace(/\w\S*/g, (txt) => upperFirst(txt))
}

/**
 * Remove extra spaces from string
 *
 * @param {string} string
 * @returns {string}
 */
export function clearSpaces(string) {
  return string.toString().replace(/\s+/g, ' ').trim()
}

export {
  trim,
  endsWith,
  startsWith,
  pad,
  padStart,
  padEnd,
  camelCase,
  pascalCase,
  hasUnicode,
  strtr,
  replaceByTemplate,
}
