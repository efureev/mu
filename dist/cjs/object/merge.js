"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = merge;
const clone_1 = __importDefault(require("../core/clone"));
const isObject_1 = __importDefault(require("../is/isObject"));
function merge(original, ...values) {
    const ln = values.length;
    let i = 0, object, key, value, sourceKey;
    for (; i < ln; i++) {
        object = values[i];
        if (!(0, isObject_1.default)(object)) {
            continue;
        }
        for (key in object) {
            value = object[key];
            if (value && value.constructor === Object) {
                sourceKey = original[key];
                if (sourceKey && sourceKey.constructor === Object) {
                    merge(sourceKey, value);
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