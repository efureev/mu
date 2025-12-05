/**
 * Return common items for two arrays
 *
 * @param {Array} array
 * @param {Array} array2
 * @returns {any[]}
 */
export default function intersect(array: any[], array2: any[]): any[] {
  // Уникальное пересечение за один проход по меньшему множеству
  const aSet = new Set(array)
  const bSet = new Set(array2)
  const result: any[] = []

  // Идём по меньшему набору уникальных значений
  const [small, big] = aSet.size <= bSet.size ? [aSet, bSet] : [bSet, aSet]
  for (const v of small) {
    if (big.has(v)) {
      result.push(v)
    }
  }
  return result
}

/**
 * Return common items for all arrays
 *
 * @param array
 * @param arrays
 * @returns {*|any[]}
 */
export function intersectAll(array: any[], ...arrays: any[]) {
  // Начинаем с самого короткого массива для уменьшения промежуточных наборов
  const all = [array, ...arrays].sort((a, b) => a.length - b.length)
  return all.slice(1).reduce((prev, next) => intersect(prev, next), all[0])
}
