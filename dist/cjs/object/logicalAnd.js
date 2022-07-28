"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logicalAnd;

function logicalAnd(object) {
  for (var key in object) {
    if (object[key] === false) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=logicalAnd.js.map