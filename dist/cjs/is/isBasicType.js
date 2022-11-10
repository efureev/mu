"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdvancedType = void 0;
const isBoolean_1 = __importDefault(require("./isBoolean"));
const isNil_1 = __importDefault(require("./isNil"));
const isNumeric_1 = __importDefault(require("./isNumeric"));
const isString_1 = __importDefault(require("./isString"));
const isSymbol_1 = __importDefault(require("./isSymbol"));
function isBasicType(value) {
    return !isAdvancedType(value);
}
exports.default = isBasicType;
function isAdvancedType(value) {
    return !(0, isNil_1.default)(value) && ((0, isSymbol_1.default)(value) || (!(0, isString_1.default)(value) && !(0, isNumeric_1.default)(value) && !(0, isBoolean_1.default)(value)));
}
exports.isAdvancedType = isAdvancedType;
//# sourceMappingURL=isBasicType.js.map