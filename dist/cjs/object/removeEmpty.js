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
    let result = {}, key;
    for (key in object) {
        if (object.hasOwnProperty(key) && !(0, isEmpty_1.default)(object[key])) {
            if ((0, isObject_1.default)(object[key])) {
                const r = removeEmpty(object[key]);
                if (!(0, isEmpty_1.default)(r)) {
                    result[key] = r;
                }
                continue;
            }
            if (Array.isArray(object[key])) {
                const a = [];
                object[key].forEach((v) => {
                    if ((0, isString_1.default)(v)) {
                        a.push(v);
                    }
                    else {
                        const r = removeEmpty(v);
                        if (!(0, isEmpty_1.default)(r)) {
                            a.push(r);
                        }
                    }
                });
                if (!(0, isEmpty_1.default)(a)) {
                    result[key] = a;
                }
                continue;
            }
            result[key] = object[key];
        }
    }
    return result;
}
//# sourceMappingURL=removeEmpty.js.map