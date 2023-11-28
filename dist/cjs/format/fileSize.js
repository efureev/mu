"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const intWord_1 = __importDefault(require("./intWord"));
/**
 * Display
 * @param {Number|String} size
 * @param {Number} kilo
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSeparator
 * @param {String} suffixSeparator
 * @returns {string}
 */
function fileSize(size, kilo = 1024, decimals = 2, decPoint = '.', thousandsSeparator = ',', suffixSeparator = ' ') {
    const num = +size;
    if (num <= 0) {
        return '0 bytes';
    }
    if (num < kilo) {
        decimals = 0;
    }
    return (0, intWord_1.default)(num, ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb'], kilo, decimals, decPoint, thousandsSeparator, suffixSeparator);
}
exports.default = fileSize;
//# sourceMappingURL=fileSize.js.map