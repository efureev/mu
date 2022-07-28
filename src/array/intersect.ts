/**
 * Return common items for two arrays
 *
 * @param {Array} array
 * @param {Array} array2
 * @returns {any[]}
 */
export default function intersect(array: any[], array2: any[]): any[] {
  const set = new Set(array)
  return [...new Set(array2.filter(item => set.has(item)))]
}

/**
 * Return common items for all arrays
 *
 * @param array
 * @param arrays
 * @returns {*|any[]}
 */
export function intersectAll(array: any[], ...arrays: any[]) {
  return arrays.reduce((previous, next) => {
    return intersect(previous, next)
  }, array)
}
