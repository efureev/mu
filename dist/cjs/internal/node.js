"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Detect free variable `exports`. */
const freeExports_1 = __importDefault(require("./free/freeExports"));
/** Detect free variable `module`. */
const freeModule = freeExports_1.default && typeof module == 'object' && module && !('nodeType' in module) && module;
/** Used to access faster Node.js helpers. */
exports.default = (function () {
    try {
        // Use `util.types` for Node.js 10+.
        return freeModule && freeModule.require && freeModule.require('util').types;
    }
    catch (error) { }
})();
//# sourceMappingURL=node.js.map