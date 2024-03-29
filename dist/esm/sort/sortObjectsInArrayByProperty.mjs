import sortByProperty from './sortByProperty.mjs';
import isObject from '../is/isObject.mjs';
import isString from '../is/isString.mjs';
import select from '../object/select.mjs';
import clone from '../core/clone.mjs';
import pathToObject from '../object/pathToObject.mjs';
/**
 * Sort object-like items into array
 *
 * @param {object|array} obj
 * @param {string} property
 * @param {boolean} asc
 * @param {boolean} ignoreCase
 * @return {(function(*, *): number)|*}
 *
 * @example 1 array-sorting with digit keys
 *  const items = [
 *       { id: 2, title: '...', pId: 62 },
 *       { id: 1, title: '...', pId: 43 }
 *  ]
 *  sortObjectsInArrayByProperty(items, `id`)
 *  sortObjectsInArrayByProperty(items, `pId`, false) // is equal `sortDescObjectsInArrayByProperty(items, `pId`)`
 *  sortObjectsInArrayByProperty(items, `pId`, false, false) is equal `sortDescObjectsInArrayByProperty(items, `pId`, false)`
 *
 * @example 2: array-sorting with string keys
 *  const items = [
 *      { type: 'vcs', url: 'ssh://git@example.com:2225/modules/Mo/symbols.git' },
 *      { type: 'vcs', url: 'ssh://git@example.com:2225/modules/Zoo.git' },
 *  ]
 *  sortObjectsInArrayByProperty(items, `url`)
 *
 * @example 3: object-like-sorting with string keys
 *  const items = {
 *    name: 'list',
 *    sub1: {
 *       sub2: {
 *        sub3: {
 *          repositories: [
 *            { type: 'vcs', url: 'ssh://git@example.com:2225/modules/Mo/symbols.git' },
 *            { type: 'vcs', url: 'ssh://git@example.com:2225/modules/Zoo.git' },
 *          ]
 *        }
 *      }
 *    }
 *  };
 *
 *  sortObjectsInArrayByProperty(items, `sub1.sub2.sub3.repositories.url`)
 *
 */
export default function sortObjectsInArrayByProperty(obj, property, asc = true, ignoreCase = true) {
    if (!isString(property)) {
        throw new Error(`key should be a String`);
    }
    if (Array.isArray(obj)) {
        return obj.sort(sortByProperty(property, asc, ignoreCase));
    }
    if (!isObject(obj)) {
        throw new Error(`obj should be an Object or an Array`);
    }
    if (!property.includes('.')) {
        throw new Error(`key's path should divided by dot (.): key1.inner-key.localKey`);
    }
    const cloneObj = clone(obj);
    const keys = property.split(`.`);
    const sortKey = keys.pop();
    if (!sortKey) {
        throw new Error(`Not found a key`);
    }
    const aPath = keys.join(`.`);
    const a = select(cloneObj, aPath);
    const aSorted = sortObjectsInArrayByProperty(a, sortKey, asc, ignoreCase);
    return pathToObject(aPath, aSorted, cloneObj);
}
export function sortDescObjectsInArrayByProperty(obj, property, ignoreCase = true) {
    return sortObjectsInArrayByProperty(obj, property, false, ignoreCase);
}
//# sourceMappingURL=sortObjectsInArrayByProperty.mjs.map