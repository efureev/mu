/**
 * Remove extra spaces from string
 *
 * @param {string} str
 * @returns {string}
 */
export default function clearSpaces(str: string): string {
  return str.toString().replace(/\s+/g, ' ').trim()
}
