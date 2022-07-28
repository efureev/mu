/**
 * Random function returns random item from array
 *
 * @param {Array} array
 * @returns {unknown}
 */
export default function random(array: any[]): any {
  return array[Math.floor(Math.random() * array.length)]
}
