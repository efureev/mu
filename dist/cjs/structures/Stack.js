"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const isFunction_1 = __importDefault(require("../is/isFunction"));
class Stack {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pull() {
        return !this.isEmpty() ? this.data.pop() : undefined;
    }
    peek() {
        return !this.isEmpty() ? this.data[this.size() - 1] : undefined;
    }
    size() {
        return this.data.length;
    }
    isEmpty() {
        return this.data.length === 0;
    }
    toArray() {
        return [...this.data].reverse();
    }
    toString(callback) {
        const data = this.toArray();
        if (callback && (0, isFunction_1.default)(callback)) {
            return data.map(item => callback(item)).toString();
        }
        return data.toString();
    }
}
exports.Stack = Stack;
exports.default = new Stack();
//# sourceMappingURL=Stack.js.map