/**
 * Random function returns random item from array
 *
 * @param {Array} array
 * @returns {unknown}
 */
export default function random(array) {
    const { length } = array;
    if (length === 0)
        return undefined;
    return array[Math.floor(Math.random() * length)];
}
//# sourceMappingURL=random.mjs.map