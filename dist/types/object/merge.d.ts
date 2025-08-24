type record = Record<PropertyKey, any>;
/**
 * Merge objects recursively
 */
export default function merge<T extends Partial<record>>(original: Partial<T>, ...values: Partial<T>[]): T;
export {};
//# sourceMappingURL=merge.d.ts.map