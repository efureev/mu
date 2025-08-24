"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = clone;
const isDate_1 = __importDefault(require("../is/isDate"));
const enumerables = ['valueOf', 'toLocaleString', 'toString', 'constructor'];
/**
 * Clone simple variables including array, {}-like objects, DOM nodes and Date without
 * keeping the old reference. A reference for the object itself is returned if it's not
 * a direct descendant of Object.
 *
 * @param {Object} item The variable to clone
 * @param {Boolean} [cloneDom=true] `true` to clone DOM nodes.
 * @return {Object} clone
 */
function clone(item, cloneDom = true) {
    if (item === null || item === undefined) {
        return item;
    }
    // @ts-ignore
    if (cloneDom && item.nodeType && item.cloneNode) {
        // @ts-ignore
        return item.cloneNode(true);
    }
    // Date
    if ((0, isDate_1.default)(item)) {
        // @ts-ignore
        return new Date(item.getTime());
    }
    let i, j, k;
    // Array
    if (Array.isArray(item)) {
        i = item.length;
        let newClone = [];
        while (i--) {
            newClone[i] = clone(item[i], cloneDom);
        }
        return newClone;
    }
    const type = Object.prototype.toString.call(item);
    // Plain Object
    if (type === '[object Object]' && item.constructor === Object) {
        const src = item;
        const newClone = {};
        for (const key in src) {
            if (Object.prototype.hasOwnProperty.call(src, key)) {
                newClone[key] = clone(src[key], cloneDom);
            }
        }
        for (const k of enumerables) {
            if (Object.prototype.hasOwnProperty.call(src, k)) {
                newClone[k] = src[k];
            }
        }
        // @ts-ignore
        return newClone;
    }
    return item;
}
//# sourceMappingURL=clone.js.map