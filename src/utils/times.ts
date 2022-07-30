import isFunction from '../is/isFunction'
import { TextNumber } from '../internal/types'

/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument; (index).
 *
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} [iteratee] The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * times(3); // => ['0', '1', '2']
 */
type F = (idx: number) => TextNumber

export default function times(n: number = 1, iteratee?: TextNumber | F): TextNumber[] {
  const result = new Array(n)
  let index = -1

  const isFn = isFunction(iteratee)

  while (++index < n) {
    const iterValue = isFn ? (iteratee as F)(index) : null

    result[index] = iterValue || iteratee || index
  }

  return result
}
