"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
const isFunction_1 = __importDefault(require("../is/isFunction"));
const DEFAULT_PRIORITY = 0;
// Priority queue implemented as an array of buckets (queues) keyed by priority.
// Higher numeric priority is dequeued first.
class PriorityQueue {
    // Buckets indexed by priority: each bucket is a FIFO queue (array) of items.
    buckets = [];
    // Total number of items across all buckets.
    count = 0;
    // Highest priority index that currently has (or last had) items; -1 means empty.
    maxPriority = -1;
    push(item, priority = DEFAULT_PRIORITY) {
        if (priority < 0 || !Number.isFinite(priority)) {
            throw new TypeError(`priority must be a non-negative finite number, got: ${priority}`);
        }
        if (!this.buckets[priority]) {
            this.buckets[priority] = [];
        }
        this.buckets[priority].push(item);
        this.count++;
        if (priority > this.maxPriority) {
            this.maxPriority = priority;
        }
    }
    pull() {
        if (this.isEmpty()) {
            return undefined;
        }
        // Scan down from current highest priority to find the next non-empty bucket.
        for (let p = this.maxPriority; p >= 0; p--) {
            const bucket = this.buckets[p];
            if (bucket && bucket.length > 0) {
                const result = bucket.shift();
                this.count--;
                // If the bucket becomes empty and this was the highest, adjust maxPriority.
                if (bucket.length === 0 && p === this.maxPriority) {
                    this.recalculateMaxPriority();
                }
                return result;
            }
        }
        // No items found; normalize internal state.
        this.maxPriority = -1;
        return undefined;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        for (let p = this.maxPriority; p >= 0; p--) {
            const bucket = this.buckets[p];
            if (bucket && bucket.length > 0) {
                return bucket[0];
            }
        }
        return undefined;
    }
    toArray() {
        // Flatten from high to low priority while preserving FIFO within each bucket.
        const result = [];
        for (let p = this.maxPriority; p >= 0; p--) {
            const bucket = this.buckets[p];
            if (bucket && bucket.length > 0) {
                // Maintain order within the same priority.
                for (let i = 0; i < bucket.length; i++) {
                    result.push(bucket[i]);
                }
            }
        }
        return result;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    reset() {
        this.buckets = [];
        this.count = 0;
        this.maxPriority = -1;
    }
    toString(callback) {
        const data = this.toArray();
        if (callback && (0, isFunction_1.default)(callback)) {
            return data.map(item => callback(item)).toString();
        }
        return data.toString();
    }
    recalculateMaxPriority() {
        // Find the next lower priority that still has items.
        while (this.maxPriority >= 0) {
            const bucket = this.buckets[this.maxPriority];
            if (bucket && bucket.length > 0) {
                break;
            }
            this.maxPriority--;
        }
    }
}
exports.PriorityQueue = PriorityQueue;
exports.default = new PriorityQueue();
//# sourceMappingURL=PriorityQueue.js.map