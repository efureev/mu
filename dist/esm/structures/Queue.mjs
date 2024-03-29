import isFunction from '../is/isFunction.mjs';
export class Queue {
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
        if (callback && isFunction(callback)) {
            return data.map(item => callback(item)).toString();
        }
        return data.toString();
    }
}
export default new Queue();
//# sourceMappingURL=Queue.mjs.map