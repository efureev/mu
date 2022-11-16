import type { CollectionType } from '../internal/types';
export default function forEach(collection: CollectionType, iterateFn: ObjectEachCallback): ObjType;
type ObjType = Record<string | number, any>;
type ObjectEachCallback = (value: any, index: PropertyKey, array: ObjType) => boolean | void;
export {};
//# sourceMappingURL=forEach.d.ts.map