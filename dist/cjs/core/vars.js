"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reIsFloat = exports.reIsUint = exports.reIsBadHex = exports.reIsOctal = exports.reIsBinary = exports.reTrim = exports.reNonAlpha = void 0;
exports.reNonAlpha = /[^0-9a-zA-Z_]/g;
exports.reTrim = /^\s+|\s+$/g;
/** Used to detect binary string values. */
exports.reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */
exports.reIsOctal = /^0o[0-7]+$/i;
/** Used to detect bad signed hexadecimal string values. */
exports.reIsBadHex = /^[+-]0x[\da-f]+$/i;
/** Used to detect unsigned integer values. */
exports.reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to detect float values. */
exports.reIsFloat = /^[+|-]?\d+\.\d+$/;
//# sourceMappingURL=vars.js.map