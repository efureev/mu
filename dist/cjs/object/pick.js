"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pick;
const isEmpty_1 = __importDefault(require("../is/isEmpty"));
const forEach_1 = __importDefault(require("../core/forEach"));
const select_1 = __importDefault(require("./select"));
/**
 *
 * @param {object} object
 * @param {array} paths
 * @returns {object}
 *
 * @example #1
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * pick(object, ['a', 'c']); // => { 'a': 1, 'c': 3 }
 *
 * @example #2
 * var object = { d: { d: { d:1 } }, b: 2 };
 *
 * pick(object, ['d.d.d']); // => { 'd.d.d': 1 }
 *
 * @example #3
 * var object = { a: [ { id:1 }, { id:2 } ], b: 2 };
 *
 * pick(object, ['d.1.id', b]); // => { 'd.1.id': 2, b: 2 }
 */
function pick(object, paths) {
    const res = {};
    if ((0, isEmpty_1.default)(object)) {
        return res;
    }
    (0, forEach_1.default)(paths, v => {
        res[v] = (0, select_1.default)(object, v);
    });
    return res;
}
//# sourceMappingURL=pick.js.map