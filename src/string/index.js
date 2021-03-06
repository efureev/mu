import trim from './trim'
import endsWith from './endsWith'
import { hasUnicode } from './unicode'
import startsWith from './startsWith'
import padStart, { pad, padEnd } from '../string/padStart'
import strtr, { replaceByTemplate } from '../string/strtr'
import camelCase, { pascalCase } from '../string/camelCase'

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
