/**
 * Converts the first character of every word into string to upper case
 *
 * @param {string} string
 * @returns {string}
 */
import upperFirst from './upperFirst'
import clearSpaces from './clearSpaces'

export default function titleCase(string: any): string {
  return clearSpaces(string).replace(/\w\S*/g, txt => upperFirst(txt))
}
