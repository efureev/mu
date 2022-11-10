"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param {object} object
 * @example #1
 * flip({ {A : 1, B : 2, C : 3, D : 4}) // {1 : A, 2 : B, 3 : C, 4 : D}
 */
function flip(object) {
    const result = {};
    for (const key of Object.keys(object)) {
        result[object[key]] = key;
    }
    return result;
}
exports.default = flip;
//# sourceMappingURL=flip.js.map