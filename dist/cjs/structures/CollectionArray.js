"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionArray = void 0;
const isFunction_1 = __importDefault(require("../is/isFunction"));
const toString_1 = __importDefault(require("../to/toString"));
class CollectionArray {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pull() {
        return !this.isEmpty() ? this.items.pop() : undefined;
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    toArray() {
        return [...this.items];
    }
    toString(callback) {
        const data = this.toArray();
        if (callback && (0, isFunction_1.default)(callback)) {
            return data.map(item => callback(item)).toString();
        }
        return data.toString();
    }
    map(callback) {
        const data = this.toArray();
        if (!(0, isFunction_1.default)(callback)) {
            throw Error('Invalid map-function: ' + (0, toString_1.default)(callback));
        }
        return data.map(item => callback(item));
    }
}
exports.CollectionArray = CollectionArray;
exports.default = new CollectionArray();
//# sourceMappingURL=CollectionArray.js.map