import toString from '~/to/toString'

/**
 * Checks if string starts with the given target string
 *
 * @param {string} str
 * @param {string} target
 * @returns {boolean}
 */
export default function startsWith(str: string, target: string): boolean {
  target = toString(target)

  return toString(str).slice(0, target.length) === target
}
