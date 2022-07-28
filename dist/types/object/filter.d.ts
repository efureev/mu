/**
 * Filter value by deep key in object(array)
 *
 * @example
 const scores = {
    John: 2,
    Sarah: 3,
    Janet: 1
  };

 filter(scores, ([name, score]) => score > 1);
 *
 * @param {object} object
 * @param {Function} predicate
 * @returns {object}
 */
export default function filter<T>(object: Record<PropertyKey, T>, predicate: (fn: [string, T]) => boolean): Record<PropertyKey, T>;
//# sourceMappingURL=filter.d.ts.map