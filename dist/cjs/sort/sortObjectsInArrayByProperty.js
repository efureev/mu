"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortDescObjectsInArrayByProperty = void 0;
const sortByProperty_1 = __importDefault(require("./sortByProperty"));
const isObject_1 = __importDefault(require("../is/isObject"));
const isString_1 = __importDefault(require("../is/isString"));
const select_1 = __importDefault(require("../object/select"));
const clone_1 = __importDefault(require("../core/clone"));
const pathToObject_1 = __importDefault(require("../object/pathToObject"));
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
function sortObjectsInArrayByProperty(obj, property, asc = true, ignoreCase = true) {
    if (!(0, isString_1.default)(property)) {
        throw new Error(`key should be a String`);
    }
    if (Array.isArray(obj)) {
        return obj.sort((0, sortByProperty_1.default)(property, asc, ignoreCase));
    }
    if (!(0, isObject_1.default)(obj)) {
        throw new Error(`obj should be an Object or an Array`);
    }
    if (!property.includes('.')) {
        throw new Error(`key's path should divided by dot (.): key1.inner-key.localKey`);
    }
    const cloneObj = (0, clone_1.default)(obj);
    const keys = property.split(`.`);
    const sortKey = keys.pop();
    if (!sortKey) {
        throw new Error(`Not found a key`);
    }
    const aPath = keys.join(`.`);
    const a = (0, select_1.default)(cloneObj, aPath);
    const aSorted = sortObjectsInArrayByProperty(a, sortKey, asc, ignoreCase);
    return (0, pathToObject_1.default)(aPath, aSorted, cloneObj);
}
exports.default = sortObjectsInArrayByProperty;
function sortDescObjectsInArrayByProperty(obj, property, ignoreCase = true) {
    return sortObjectsInArrayByProperty(obj, property, false, ignoreCase);
}
exports.sortDescObjectsInArrayByProperty = sortDescObjectsInArrayByProperty;
//# sourceMappingURL=sortObjectsInArrayByProperty.js.map