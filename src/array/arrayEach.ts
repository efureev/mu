/**
 * A specialized version of `forEach` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} callback The function invoked per iteration.
 * @returns {Array} Returns `bool`.
 */

type ArrayEachCallback<T> = (value: T, index: number, array: T[]) => boolean | void

export default function arrayEach<T>(array: T[], callback: ArrayEachCallback<T>): T[] {
  const length = array.length
  let index = -1

  while (++index < length) {
    if (callback(array[index], index, array) === false) {
      break
    }
  }

  return array
}
