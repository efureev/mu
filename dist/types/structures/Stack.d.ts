export declare class Stack<T> {
    protected data: T[];
    push(item: T): void;
    pull(): T | undefined;
    peek(): T | undefined;
    size(): number;
    isEmpty(): boolean;
    toArray(): T[];
    toString(callback?: (i: T) => any): string;
}
declare const _default: Stack<unknown>;
export default _default;
//# sourceMappingURL=Stack.d.ts.map