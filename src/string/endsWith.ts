import toString from '../to/toString'

/**
 * Checks if string ends with the given target string
 *
 * @param {string} str
 * @param {string} target
 * @returns {boolean}
 */
export default function endsWith(str: string, target: string): boolean {
  str = toString(str)
  target = toString(target)

  let position = str.length
  const end = position

  position -= target.length

  return position >= 0 && str.slice(position, end) === target
}
