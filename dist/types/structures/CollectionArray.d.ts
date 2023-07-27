export declare class CollectionArray<T> {
    protected items: T[];
    push(item: T): void;
    pull(): T | undefined;
    size(): number;
    isEmpty(): boolean;
    toArray(): T[];
    toString(callback?: (i: T) => any): string;
    map<R extends any>(callback: (i: T) => any): R[];
}
declare const _default: CollectionArray<unknown>;
export default _default;
//# sourceMappingURL=CollectionArray.d.ts.map