"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Random function returns random item from array
 *
 * @param {Array} array
 * @returns {unknown}
 */
function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}
exports.default = random;
//# sourceMappingURL=random.js.map