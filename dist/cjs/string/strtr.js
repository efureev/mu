"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceByTemplate = replaceByTemplate;
exports.default = strtr;
const pregQuote_1 = __importDefault(require("../utils/pregQuote"));
/**
 * Replace all entries in string according to map
 *
 * @param {string} str
 * @param {{}} map
 * @return {string}
 */
function replaceByTemplate(str, map) {
    let cmpString = '', offset = 0, find = -1, addString = '';
    for (let index = 0; index < str.length; index++) {
        cmpString += '0';
    }
    for (const fr in map) {
        offset = 0;
        const val = String(map[fr]);
        while ((find = str.indexOf(fr, offset)) !== -1) {
            if (Number.parseInt(cmpString.slice(find, find + fr.length)) !== 0) {
                offset = find + 1;
                continue;
            }
            for (let k = 0; k < val.length; k++) {
                addString += '1';
            }
            cmpString = cmpString.slice(0, find) + addString + cmpString.slice(find + fr.length, cmpString.length);
            str = str.slice(0, find) + val + str.slice(find + fr.length, str.length);
            offset = find + val.length; //+ 1
            addString = '';
        }
    }
    return str;
}
function strtr(str, from, to) {
    if (typeof from === 'object') {
        return replaceByTemplate(str, from);
    }
    if (!to) {
        return str;
    }
    for (let index = 0; index < from.length; index++) {
        str = str.replace(new RegExp((0, pregQuote_1.default)(from.charAt(index)), 'g'), to.charAt(index));
    }
    return str;
}
//# sourceMappingURL=strtr.js.map