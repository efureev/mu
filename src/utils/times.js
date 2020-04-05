/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument; (index).
 *
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} [iteratee] The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * times(3, String);
 * // => ['0', '1', '2']
 */
export default function times(n = 1, iteratee = (v) => v) {
  let index = -1,
    result = new Array(n)

  while (++index < n) {
    result[index] = iteratee(index)
  }

  return result
}
