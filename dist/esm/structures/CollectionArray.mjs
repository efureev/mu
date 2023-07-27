import isFunction from '../is/isFunction.mjs';
import toString from '../to/toString.mjs';
export class CollectionArray {
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
        if (callback && isFunction(callback)) {
            return data.map(item => callback(item)).toString();
        }
        return data.toString();
    }
    map(callback) {
        const data = this.toArray();
        if (!isFunction(callback)) {
            throw Error('Invalid map-function: ' + toString(callback));
        }
        return data.map(item => callback(item));
    }
}
export default new CollectionArray();
//# sourceMappingURL=CollectionArray.mjs.map