/**
 * The difference will output the elements from array A that are not in the array B.
 *
 * @param {Array} array
 * @param {Array} array2
 * @returns {any[]}
 */
export default function difference(array, array2) {
    return [...new Set(array.filter(x => !array2.includes(x)))];
}
//# sourceMappingURL=difference.js.map