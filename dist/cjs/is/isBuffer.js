"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const root_1 = __importDefault(require("../internal/root"));
/** Detect free variable `exports`. */
const freeExports = typeof exports === 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
const freeModule = freeExports && typeof module == 'object' && module && !('nodeType' in module) && module;
/** Detect the popular CommonJS extension `module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */
const Buffer = moduleExports ? root_1.default.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @example
 *
 * isBuffer(new Buffer(2));
 * // => true
 *
 * isBuffer(new Uint8Array(2));
 * // => false
 */
exports.default = nativeIsBuffer || (() => false);
//# sourceMappingURL=isBuffer.js.map