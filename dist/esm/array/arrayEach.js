/**
 * A specialized version of `forEach` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} callback The function invoked per iteration.
 * @returns {Array} Returns `bool`.
 */
export default function arrayEach(array, callback) {
    const length = array.length;
    let index = -1;
    while (++index < length) {
        if (callback(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}
//# sourceMappingURL=arrayEach.js.map