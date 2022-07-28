"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reTrim = exports.reIsUint = exports.reIsOctal = exports.reIsFloat = exports.reIsBinary = exports.reIsBadHex = void 0;
var reTrim = /^\s+|\s+$/g;
/** Used to detect binary string values. */

exports.reTrim = reTrim;
var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

exports.reIsBinary = reIsBinary;
var reIsOctal = /^0o[0-7]+$/i;
/** Used to detect bad signed hexadecimal string values. */

exports.reIsOctal = reIsOctal;
var reIsBadHex = /^[+-]0x[\da-f]+$/i;
/** Used to detect unsigned integer values. */

exports.reIsBadHex = reIsBadHex;
var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to detect float values. */

exports.reIsUint = reIsUint;
var reIsFloat = /^[+|-]?\d+\.\d+$/;
exports.reIsFloat = reIsFloat;
//# sourceMappingURL=vars.js.map