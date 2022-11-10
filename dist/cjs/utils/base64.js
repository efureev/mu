"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utf8Tob64Safe = exports.b64ToUtf8Safe = exports.b64ToUtf8 = exports.utf8ToB64 = void 0;
const strtr_1 = __importDefault(require("../string/strtr"));
const utf8ToB64Node = (str) => {
    return Buffer.from(str).toString('base64');
};
const utf8ToB64Function = (string) => {
    return utf8ToB64Node(string);
};
const b64ToUtf8Node = (string) => {
    return Buffer.from(string, 'base64').toString();
};
const b64ToUtf8Function = (string) => {
    return b64ToUtf8Node(string);
};
/**
 * Encode string from Unicode to base-64
 *
 * @param {string} string
 * @returns {string}
 */
function utf8ToB64(string) {
    return utf8ToB64Function(unescape(encodeURIComponent(string)));
}
exports.utf8ToB64 = utf8ToB64;
/**
 * Decode from base-64 to Unicode string
 *
 * @param {string} string
 * @returns {string}
 */
function b64ToUtf8(string) {
    return decodeURIComponent(escape(b64ToUtf8Function(string)));
}
exports.b64ToUtf8 = b64ToUtf8;
const SYMBOLS_STANDARD = '+/=';
const SYMBOLS_URL_SAFE = '-_~';
/**
 * Decode from safe-base-64 to Unicode string
 *
 * @param {string} string
 * @return {string}
 */
function b64ToUtf8Safe(string) {
    return (0, strtr_1.default)(b64ToUtf8Function(string), SYMBOLS_STANDARD, SYMBOLS_URL_SAFE);
}
exports.b64ToUtf8Safe = b64ToUtf8Safe;
/**
 * Encode from Unicode string to safe-base-64
 *
 * @param {string} string
 * @return {string}
 */
function utf8Tob64Safe(string) {
    return (0, strtr_1.default)(utf8ToB64Function(string), SYMBOLS_STANDARD, SYMBOLS_URL_SAFE);
}
exports.utf8Tob64Safe = utf8Tob64Safe;
//# sourceMappingURL=base64.js.map