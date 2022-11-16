export const reNonAlpha = /[^0-9a-zA-Z_]/g;
export const reTrim = /^\s+|\s+$/g;
/** Used to detect binary string values. */
export const reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */
export const reIsOctal = /^0o[0-7]+$/i;
/** Used to detect bad signed hexadecimal string values. */
export const reIsBadHex = /^[+-]0x[\da-f]+$/i;
/** Used to detect unsigned integer values. */
export const reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to detect float values. */
export const reIsFloat = /^[+|-]?\d+\.\d+$/;
//# sourceMappingURL=vars.mjs.map