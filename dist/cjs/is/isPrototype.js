"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Used for built-in method references. */
const isFunction_1 = __importDefault(require("./isFunction"));
const objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 */
function isPrototype(value) {
    const Ctor = value && value.constructor, proto = ((0, isFunction_1.default)(Ctor) && Ctor.prototype) || objectProto;
    return value === proto;
}
exports.default = isPrototype;
//# sourceMappingURL=isPrototype.js.map