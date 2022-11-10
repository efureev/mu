"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Used as a reference to the global object. */
const freeGlobal_1 = __importDefault(require("./free/freeGlobal"));
const freeSelf_1 = __importDefault(require("./free/freeSelf"));
exports.default = freeGlobal_1.default || freeSelf_1.default || new Function('return this')();
//# sourceMappingURL=root.js.map