"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.padNumber = padNumber;
exports.padDateTime = padDateTime;
const pad_1 = require("../string/pad");
const isNil_1 = __importDefault(require("../is/isNil"));
function padNumber(value, targetLength) {
    if ((0, isNil_1.default)(value)) {
        return '0';
    }
    return (0, pad_1.padStart)(value, targetLength, '0');
}
function padDateTime(value) {
    if ((0, isNil_1.default)(value)) {
        return '00';
    }
    return (0, pad_1.padStart)(value, 2, '0');
}
//# sourceMappingURL=pad.js.map