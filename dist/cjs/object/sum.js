"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sum;
const isNil_1 = __importDefault(require("../is/isNil"));
const isNumeric_1 = __importDefault(require("../is/isNumeric"));
function sum(object) {
    let result = 0;
    for (const key in object) {
        let value = object[key];
        if (value instanceof Function) {
            value = value();
        }
        if ((0, isNil_1.default)(value) || value === false) {
            value = 0;
        }
        if (!(0, isNumeric_1.default)(value)) {
            value = 1;
        }
        result += value;
    }
    return result;
}
//# sourceMappingURL=sum.js.map