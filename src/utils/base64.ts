import strtr from '~/string/strtr'

const utf8ToB64Node = (str: string): string => {
  return Buffer.from(str).toString('base64')
}

const utf8ToB64Function = (string: string): string => {
  return utf8ToB64Node(string)
}

const b64ToUtf8Node = (string: string): string => {
  return Buffer.from(string, 'base64').toString()
}

const b64ToUtf8Function = (string: string): string => {
  return b64ToUtf8Node(string)
}

/**
 * Encode string from Unicode to base-64
 *
 * @param {string} string
 * @returns {string}
 */
export function utf8ToB64(string: string): string {
  return utf8ToB64Function(unescape(encodeURIComponent(string)))
}

/**
 * Decode from base-64 to Unicode string
 *
 * @param {string} string
 * @returns {string}
 */
export function b64ToUtf8(string: string): string {
  return decodeURIComponent(escape(b64ToUtf8Function(string)))
}

const SYMBOLS_STANDARD = '+/='
const SYMBOLS_URL_SAFE = '-_~'

/**
 * Decode from safe-base-64 to Unicode string
 *
 * @param {string} string
 * @return {string}
 */
export function b64ToUtf8Safe(string: string): string {
  return strtr(b64ToUtf8Function(string), SYMBOLS_STANDARD, SYMBOLS_URL_SAFE)
}

/**
 * Encode from Unicode string to safe-base-64
 *
 * @param {string} string
 * @return {string}
 */
export function utf8Tob64Safe(string: string): string {
  return strtr(utf8ToB64Function(string), SYMBOLS_STANDARD, SYMBOLS_URL_SAFE)
}
