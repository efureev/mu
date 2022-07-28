/**
 * The symmetricalDifference will output anti-intersection.
 *
 * @param {Array} array
 * @param {Array} array2
 * @returns {any[]}
 */
export default function symmetricalDifference(array: any[], array2: any[]): any[] {
  return [...new Set(array)].filter(x => !array2.includes(x)).concat(array2.filter(x => !array.includes(x)))
}
