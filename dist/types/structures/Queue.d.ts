export declare class Queue<T> {
    protected data: T[];
    push(item: T): void;
    pull(): T | undefined;
    peek(): T | undefined;
    size(): number;
    isEmpty(): boolean;
    toArray(): T[];
    reset(): void;
    toString(callback?: (i: T) => any): string;
}
declare const _default: Queue<unknown>;
export default _default;
//# sourceMappingURL=Queue.d.ts.map