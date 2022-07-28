"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pregQuote;

function pregQuote(string) {
  // Quote regular expression characters
  return string.replace(/([!$()*+.:<=>?[\\\]^{|}])/g, '\\$1');
}
//# sourceMappingURL=pregQuote.js.map