"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = now;

var nowFn = Date.now || function () {
  return new Date().getTime();
};
/**
 * This function return Date now
 */


function now() {
  return nowFn();
}
//# sourceMappingURL=now.js.map