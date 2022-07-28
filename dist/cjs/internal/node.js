"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _freeExports = _interopRequireDefault(require("./free/freeExports"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/** Detect free variable `module`. */
var freeModule = _freeExports.default && (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !('nodeType' in module) && module;
/** Used to access faster Node.js helpers. */

var _default = function () {
  try {
    // Use `util.types` for Node.js 10+.
    return freeModule && freeModule.require && freeModule.require('util').types;
  } catch (error) {}
}();

exports.default = _default;
//# sourceMappingURL=node.js.map