import isFunction from '../is/isFunction';
export class Stack {
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
        if (callback && isFunction(callback)) {
            return data.map(item => callback(item)).toString();
        }
        return data.toString();
    }
}
export default new Stack();
//# sourceMappingURL=Stack.mjs.map