"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logicalAnd(object) {
    for (const key in object) {
        if (object[key] === false) {
            return false;
        }
    }
    return true;
}
exports.default = logicalAnd;
//# sourceMappingURL=logicalAnd.js.map