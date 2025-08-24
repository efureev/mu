"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = removeEmpty;
const isObject_1 = __importDefault(require("../is/isObject"));
const isString_1 = __importDefault(require("../is/isString"));
const isEmpty_1 = __importDefault(require("../is/isEmpty"));
/**
 * Remove all empty values in object
 *
 * @param {{}} object
 * @return {{}}
 */
function removeEmpty(object) {
    const result = {};
    for (const [key, value] of Object.entries(object)) {
        if ((0, isEmpty_1.default)(value)) {
            continue;
        }
        // Сначала массивы, затем plain-объекты
        if (Array.isArray(value)) {
            const a = [];
            for (const v of value) {
                if ((0, isString_1.default)(v)) {
                    a.push(v);
                }
                else {
                    const r = removeEmpty(v);
                    if (!(0, isEmpty_1.default)(r)) {
                        a.push(r);
                    }
                }
            }
            if (!(0, isEmpty_1.default)(a)) {
                result[key] = a;
            }
            continue;
        }
        if ((0, isObject_1.default)(value)) {
            const r = removeEmpty(value);
            if (!(0, isEmpty_1.default)(r)) {
                result[key] = r;
            }
            continue;
        }
        result[key] = value;
    }
    return result;
}
//# sourceMappingURL=removeEmpty.js.map