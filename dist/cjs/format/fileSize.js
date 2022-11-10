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
    if (size <= 0) {
        return '0 bytes';
    }
    if (size < kilo) {
        decimals = 0;
    }
    return (0, intWord_1.default)(size, ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb'], kilo, decimals, decPoint, thousandsSeparator, suffixSeparator);
}
exports.default = fileSize;
//# sourceMappingURL=fileSize.js.map