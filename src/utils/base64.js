import root from '../internal/root'
import strtr from '../string/strtr'

const utf8ToB64Node = (string) => {
  return Buffer.from(string).toString('base64')
}

const utf8ToB64Fn = (string) => {
  return root.btoa ? root.btoa(string) : utf8ToB64Node(string)
}

const b64ToUtf8Node = (string) => {
  return Buffer.from(string, 'base64').toString()
}

const b64ToUtf8Fn = (string) => {
  return root.atob ? root.atob(string) : b64ToUtf8Node(string)
}

/**
 * Encode string from Unicode to base-64
 *
 * @param {string} string
 * @returns {string}
 */
export function utf8ToB64(string) {
  return utf8ToB64Fn(unescape(encodeURIComponent(string)))
}

/**
 * Decode from base-64 to Unicode string
 *
 * @param {string} string
 * @returns {string}
 */
export function b64ToUtf8(string) {
  return decodeURIComponent(escape(b64ToUtf8Fn(string)))
}

const SYMBOLS_STANDARD = '+/='
const SYMBOLS_URL_SAFE = '-_~'

/**
 * Decode from safe-base-64 to Unicode string
 *
 * @param {string} string
 * @return {string}
 */
export function b64ToUtf8Safe(string) {
  return strtr(b64ToUtf8Fn(string), SYMBOLS_STANDARD, SYMBOLS_URL_SAFE)
}

/**
 * Encode from Unicode string to safe-base-64
 *
 * @param {string} string
 * @return {string}
 */
export function utf8Tob64Safe(string) {
  return strtr(utf8ToB64Fn(string), SYMBOLS_STANDARD, SYMBOLS_URL_SAFE)
}
