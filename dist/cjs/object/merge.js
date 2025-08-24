"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = merge;
const clone_1 = __importDefault(require("../core/clone"));
const isObject_1 = __importDefault(require("../is/isObject"));
// Узкое определение plain object без опоры на constructor
function isPlainObject(val) {
    if (!(0, isObject_1.default)(val))
        return false;
    const proto = Object.getPrototypeOf(val);
    return proto === Object.prototype || proto === null;
}
/**
 * Merge objects recursively
 */
function merge(original, ...values) {
    for (let i = 0; i < values.length; i++) {
        const object = values[i];
        if (!(0, isObject_1.default)(object)) {
            continue;
        }
        for (const key in object) {
            if (!Object.prototype.hasOwnProperty.call(object, key))
                continue;
            const value = object[key];
            const target = original[key];
            // Массивы: перезаписываем клоном (предсказуемее, чем неявные стратегии)
            if (Array.isArray(value)) {
                ;
                original[key] = (0, clone_1.default)(value);
                continue;
            }
            if (isPlainObject(value)) {
                if (isPlainObject(target)) {
                    merge(target, value);
                }
                else {
                    ;
                    original[key] = (0, clone_1.default)(value);
                }
            }
            else {
                ;
                original[key] = value;
            }
        }
    }
    return original;
}
//# sourceMappingURL=merge.js.map