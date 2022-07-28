import isObject from './../is/isObject';
/**
 * Returns count of properties of the object
 *
 * @param {object} object
 * @returns {int}
 */

export default function getSize(object) {
  if (!isObject(object)) {
    throw new Error('Param is not object');
  }

  let size = 0;
  let property;

  for (property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      size++;
    }
  }

  return size;
}
//# sourceMappingURL=getSize.js.map