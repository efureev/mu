/**
 * Remove consecutive duplicates
 * kelllleeess => keles
 * keenness => kenes
 *
 * @param {string} str
 * @param {string|string[]|undefined} els
 * @returns {string}
 */
export function removeConsecutiveDuplicates(str, els = []) {
    const map = [];
    const charsArray = typeof els === 'string' ? [els] : els;
    const seekElements = charsArray.length > 0;
    const ss = str.split('');
    for (let i = 0; i <= ss.length; i++) {
        if (ss[i] !== ss[i + 1] || (seekElements && !charsArray.includes(ss[i]))) {
            map.push(ss[i]);
        }
    }
    return map.join('');
}
//# sourceMappingURL=replace.mjs.map