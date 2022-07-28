/**
 * This function evaluates whether all parameters are objects
 */
export declare function isObjects(...parameters: any[]): boolean;
export default function isObject(value?: any): boolean;
export declare function isEmptyObject(...parameters: any[]): boolean;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @example
 *
 * isObjectLike({}); // => true
 *
 * isObjectLike([]); // => true
 *
 * isObjectLike([1, 2, 3]); // => true
 *
 * isObjectLike(new Function()); // => false
 *
 * isObjectLike(null); // => false
 */
export declare function isObjectLike(value: any): boolean;
//# sourceMappingURL=isObject.d.ts.map