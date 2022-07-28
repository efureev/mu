import { isObject, isArray } from './../is'

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

type oType = Record<string, any>
type oTypeArray = oType[]

export default function toQueryObjects(
  name: string,
  value: oType | oTypeArray,
  recursive: boolean = false
): Record<string, any>[] {
  let objects: oTypeArray = []
  let i, ln

  if (isArray(value)) {
    const valueArray = value as oTypeArray
    for (i = 0, ln = valueArray.length; i < ln; i++) {
      if (recursive) {
        objects = objects.concat(toQueryObjects(name + '[' + i + ']', valueArray[i], true))
      } else {
        objects.push({
          name: name,
          value: valueArray[i],
        })
      }
    }
    return objects
  }

  if (isObject(value)) {
    const valueObject = value as oType
    for (i in value) {
      if (Object.prototype.hasOwnProperty.call(value, i)) {
        if (recursive) {
          objects = objects.concat(toQueryObjects(name + '[' + i + ']', valueObject[i], true))
        } else {
          objects.push({
            name: name,
            value: valueObject[i],
          })
        }
      }
    }
    return objects
  }

  objects.push({
    name: name,
    value: value,
  })

  return objects
}
