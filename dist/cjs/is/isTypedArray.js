"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("../internal/node"));
const baseIsTypedArray_1 = __importDefault(require("../internal/base/baseIsTypedArray"));
const nodeIsTypedArray = node_1.default && node_1.default.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * isTypedArray(new Uint8Array);
 * // => true
 *
 * isTypedArray([]);
 * // => false
 */
exports.default = nodeIsTypedArray ? (value) => nodeIsTypedArray(value) : baseIsTypedArray_1.default;
//# sourceMappingURL=isTypedArray.js.map