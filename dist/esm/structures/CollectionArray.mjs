import isFunction from '../is/isFunction.mjs';
import toString from '../to/toString.mjs';
export class CollectionArray {
    items = [];
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
        if (callback && isFunction(callback)) {
            return this.items.map(item => callback(item)).toString();
        }
        return this.items.toString();
    }
    map(callback) {
        if (!isFunction(callback)) {
            throw Error(`Invalid map-function: ${toString(callback)}`);
        }
        return this.items.map((item, index, array) => callback(item, index, array));
    }
}
export default new CollectionArray();
//# sourceMappingURL=CollectionArray.mjs.map