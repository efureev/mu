/**
 * Checks if string can parse as URL
 *
 * @param {any} str
 * @returns {boolean}
 */
export default function isUrl(str: any): boolean {
  let url
  try {
    url = new URL(str)
  } catch (_) {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}
