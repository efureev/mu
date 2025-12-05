"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = random;
/**
 * Random function returns random item from array
 *
 * @param {Array} array
 * @returns {unknown}
 */
function random(array) {
    const { length } = array;
    if (length === 0)
        return undefined;
    return array[Math.floor(Math.random() * length)];
}
//# sourceMappingURL=random.js.map