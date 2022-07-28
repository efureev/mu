"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _freeGlobal = _interopRequireDefault(require("./free/freeGlobal"));

var _freeSelf = _interopRequireDefault(require("./free/freeSelf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as a reference to the global object. */
var _default = _freeGlobal.default || _freeSelf.default || new Function('return this')();

exports.default = _default;
//# sourceMappingURL=root.js.map