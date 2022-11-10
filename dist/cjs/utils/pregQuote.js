"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pregQuote(string) {
    // Quote regular expression characters
    return string.replace(/([!$()*+.:<=>?[\\\]^{|}])/g, '\\$1');
}
exports.default = pregQuote;
//# sourceMappingURL=pregQuote.js.map