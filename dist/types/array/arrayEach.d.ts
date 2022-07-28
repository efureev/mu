/**
 * A specialized version of `forEach` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} callback The function invoked per iteration.
 * @returns {Array} Returns `bool`.
 */
declare type ArrayEachCallback<T> = (value: T, index: number, array: T[]) => boolean | void;
export default function arrayEach<T>(array: T[], callback: ArrayEachCallback<T>): T[];
export {};
//# sourceMappingURL=arrayEach.d.ts.map