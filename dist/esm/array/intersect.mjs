/**
 * Return common items for two arrays
 *
 * @param {Array} array
 * @param {Array} array2
 * @returns {any[]}
 */
export default function intersect(array, array2) {
    const set = new Set(array);
    return [...new Set(array2.filter(item => set.has(item)))];
}
/**
 * Return common items for all arrays
 *
 * @param array
 * @param arrays
 * @returns {*|any[]}
 */
export function intersectAll(array, ...arrays) {
    return arrays.reduce((previous, next) => {
        return intersect(previous, next);
    }, array);
}
//# sourceMappingURL=intersect.mjs.map