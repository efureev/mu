"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isEmpty_1 = __importDefault(require("../is/isEmpty"));
const isObject_1 = __importDefault(require("../is/isObject"));
function pathToObject(paths = '', value = null, object = {}, divider = '.', replaceOnExist = true) {
    if ((0, isEmpty_1.default)(paths)) {
        return object;
    }
    const pathsArray = paths.split(divider), pathsCount = pathsArray.length;
    let current = object;
    for (let i = 0; i < pathsCount; i++) {
        const k = pathsArray[i];
        if ((0, isObject_1.default)(current)) {
            if ((0, isObject_1.default)(current[k])) {
                if (pathsCount - 1 === i) {
                    current[k] = value;
                }
            }
            else {
                if ((current.hasOwnProperty(k) && replaceOnExist) || !current.hasOwnProperty(k)) {
                    current[k] = pathsCount - 1 === i ? value : {};
                }
            }
        }
        current = current[k];
    }
    return object;
}
exports.default = pathToObject;
//# sourceMappingURL=pathToObject.js.map