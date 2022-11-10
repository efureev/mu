import isFunction from '../is/isFunction';
export default function times(n = 1, iteratee) {
    const result = new Array(n);
    let index = -1;
    const isFn = isFunction(iteratee);
    while (++index < n) {
        const iterValue = isFn ? iteratee(index) : null;
        result[index] = iterValue || iteratee || index;
    }
    return result;
}
//# sourceMappingURL=times.js.map