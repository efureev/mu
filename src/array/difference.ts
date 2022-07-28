/**
 * The difference will output the elements from array A that are not in the array B.
 *
 * @param {Array} array
 * @param {Array} array2
 * @returns {any[]}
 */
export default function difference<T>(array: T[], array2: T[]): T[] {
  return [...new Set<T>(array.filter(x => !array2.includes(x)))]
}
