/**
 * Encode string from Unicode to base-64
 *
 * @param {string} string
 * @returns {string}
 */
export function utf8ToB64(string) {
  return btoa(unescape(encodeURIComponent(string)))
}

/**
 * Decode string from base-64 to Unicode
 *
 * @param {string} string
 * @returns {string}
 */
export function b64ToUtf8(string) {
  return decodeURIComponent(escape(atob(string)))
}
