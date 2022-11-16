/**
 * Remove consecutive duplicates
 * kelllleeess => keles
 * keenness => kenes
 *
 * @param {string} str
 * @param {string|string[]|undefined} els
 * @returns {string}
 */
export function removeConsecutiveDuplicates(str: string, els: string | string[] = []): string {
  const map: string[] = []
  const charsArray: string[] = typeof els === 'string' ? [els] : els
  const seekElements: boolean = charsArray.length > 0
  const ss = str.split('')

  for (let i = 0; i <= ss.length; i++) {
    if (ss[i] !== ss[i + 1] || (seekElements && !charsArray.includes(ss[i]))) {
      map.push(ss[i])
    }
  }

  return map.join('')
}
