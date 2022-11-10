"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isObject_1 = __importDefault(require("../is/isObject"));
function toQueryObjects(name, value, recursive = false) {
    let objects = [];
    let i, ln;
    if (Array.isArray(value)) {
        const valueArray = value;
        for (i = 0, ln = valueArray.length; i < ln; i++) {
            if (recursive) {
                objects = objects.concat(toQueryObjects(name + '[' + i + ']', valueArray[i], true));
            }
            else {
                objects.push({
                    name: name,
                    value: valueArray[i],
                });
            }
        }
        return objects;
    }
    if ((0, isObject_1.default)(value)) {
        const valueObject = value;
        for (i in value) {
            if (Object.prototype.hasOwnProperty.call(value, i)) {
                if (recursive) {
                    objects = objects.concat(toQueryObjects(name + '[' + i + ']', valueObject[i], true));
                }
                else {
                    objects.push({
                        name: name,
                        value: valueObject[i],
                    });
                }
            }
        }
        return objects;
    }
    objects.push({
        name: name,
        value: value,
    });
    return objects;
}
exports.default = toQueryObjects;
//# sourceMappingURL=toQueryObjects.js.map