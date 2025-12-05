export declare class PriorityQueue<T> {
    private buckets;
    private count;
    private maxPriority;
    push(item: T, priority?: number): void;
    pull(): T | undefined;
    peek(): T | undefined;
    toArray(): T[];
    size(): number;
    isEmpty(): boolean;
    reset(): void;
    toString(callback?: (i: T) => any): string;
    private recalculateMaxPriority;
}
declare const _default: PriorityQueue<any>;
export default _default;
//# sourceMappingURL=PriorityQueue.d.ts.map