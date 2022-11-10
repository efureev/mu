"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
const isFunction_1 = __importDefault(require("../is/isFunction"));
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pull() {
        return !this.isEmpty() ? this.data.shift() : undefined;
    }
    peek() {
        return !this.isEmpty() ? this.data[0] : undefined;
    }
    size() {
        return this.data.length;
    }
    isEmpty() {
        return this.data.length === 0;
    }
    toArray() {
        return this.data;
    }
    reset() {
        this.data.length = 0;
    }
    toString(callback) {
        const data = this.toArray();
        if (callback && (0, isFunction_1.default)(callback)) {
            return data.map(item => callback(item)).toString();
        }
        return data.toString();
    }
}
exports.Queue = Queue;
exports.default = new Queue();
//# sourceMappingURL=Queue.js.map