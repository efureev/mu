"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nowFn = Date.now || (() => new Date().getTime());
/**
 * This function return Date now
 */
function now() {
    return nowFn();
}
exports.default = now;
//# sourceMappingURL=now.js.map