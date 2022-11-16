/**
 * Converts a `name` - `value` pair to an array of objects with support for nested structures.
 * Useful to construct query strings. For example:
 *
 *     const objects = toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);
 *
 *     // objects then equals:
 *     [
 *         { name: 'hobbies', value: 'reading' },
 *         { name: 'hobbies', value: 'cooking' },
 *         { name: 'hobbies', value: 'swimming' },
 *     ];
 *
 *     const objects = toQueryObjects('dateOfBirth', {
 *         day: 3,
 *         month: 8,
 *         year: 1987,
 *         extra: {
 *             hour: 4,
 *             minute: 30,
 *         },
 *     }, true); // Recursive
 *
 *     // objects then equals:
 *     [
 *         { name: 'dateOfBirth[day]', value: 3 },
 *         { name: 'dateOfBirth[month]', value: 8 },
 *         { name: 'dateOfBirth[year]', value: 1987 },
 *         { name: 'dateOfBirth[extra][hour]', value: 4 },
 *         { name: 'dateOfBirth[extra][minute]', value: 30 },
 *     ];
 *
 * @param {String} name
 * @param {Object/Array} value
 * @param {Boolean} [recursive=false] True to traverse object recursively
 * @return {Object[]}
 * @todo write tests
 */
type oType = Record<string, any>;
type oTypeArray = oType[];
export default function toQueryObjects(name: string, value: oType | oTypeArray, recursive?: boolean): Record<string, any>[];
export {};
//# sourceMappingURL=toQueryObjects.d.ts.map