import camelCase, { pascalCase } from './camelCase'
import clearSpaces from './clearSpaces'
import endsWith from './endsWith'
import normalizeName, { normalizeCustom } from './normalize'
import pad, { padEnd, padStart } from './pad'
import startsWith from './startsWith'
import stringToArray from './stringToArray'
import strtr, { replaceByTemplate } from './strtr'
import titleCase from './titleCase'
import trim, { trimAny } from './trim'
import trimPrefix from './trimPrefix'
import trimSuffix from './trimSuffix'
import upperFirst from './upperFirst'
import { hasUnicode } from './unicode'
import { removeConsecutiveDuplicates } from './replace'

export {
  camelCase,
  clearSpaces,
  endsWith,
  hasUnicode,
  normalizeCustom,
  normalizeName,
  pad,
  padEnd,
  padStart,
  pascalCase,
  removeConsecutiveDuplicates,
  replaceByTemplate,
  startsWith,
  stringToArray,
  strtr,
  titleCase,
  trim,
  trimAny,
  trimPrefix,
  trimSuffix,
  upperFirst,
}
