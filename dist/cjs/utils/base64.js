"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.b64ToUtf8 = b64ToUtf8;
exports.b64ToUtf8Safe = b64ToUtf8Safe;
exports.utf8ToB64 = utf8ToB64;
exports.utf8Tob64Safe = utf8Tob64Safe;

var _strtr = _interopRequireDefault(require("../string/strtr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utf8ToB64Node = function utf8ToB64Node(str) {
  return Buffer.from(str).toString('base64');
};

var utf8ToB64Function = function utf8ToB64Function(string) {
  return utf8ToB64Node(string);
};

var b64ToUtf8Node = function b64ToUtf8Node(string) {
  return Buffer.from(string, 'base64').toString();
};

var b64ToUtf8Function = function b64ToUtf8Function(string) {
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
/**
 * Decode from base-64 to Unicode string
 *
 * @param {string} string
 * @returns {string}
 */


function b64ToUtf8(string) {
  return decodeURIComponent(escape(b64ToUtf8Function(string)));
}

var SYMBOLS_STANDARD = '+/=';
var SYMBOLS_URL_SAFE = '-_~';
/**
 * Decode from safe-base-64 to Unicode string
 *
 * @param {string} string
 * @return {string}
 */

function b64ToUtf8Safe(string) {
  return (0, _strtr.default)(b64ToUtf8Function(string), SYMBOLS_STANDARD, SYMBOLS_URL_SAFE);
}
/**
 * Encode from Unicode string to safe-base-64
 *
 * @param {string} string
 * @return {string}
 */


function utf8Tob64Safe(string) {
  return (0, _strtr.default)(utf8ToB64Function(string), SYMBOLS_STANDARD, SYMBOLS_URL_SAFE);
}
//# sourceMappingURL=base64.js.map