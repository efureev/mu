"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortObjectsInArrayByProperty;
exports.sortDescObjectsInArrayByProperty = sortDescObjectsInArrayByProperty;

var _sortByProperty = _interopRequireDefault(require("./sortByProperty"));

var _isObject = _interopRequireDefault(require("../is/isObject"));

var _isString = _interopRequireDefault(require("../is/isString"));

var _select = _interopRequireDefault(require("../object/select"));

var _clone = _interopRequireDefault(require("../core/clone"));

var _pathToObject = _interopRequireDefault(require("../object/pathToObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function sortObjectsInArrayByProperty(obj, property) {
  var asc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var ignoreCase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!(0, _isString.default)(property)) {
    throw new Error("key should be a String");
  }

  if (Array.isArray(obj)) {
    return obj.sort((0, _sortByProperty.default)(property, asc, ignoreCase));
  }

  if (!(0, _isObject.default)(obj)) {
    throw new Error("obj should be an Object or an Array");
  }

  if (!property.includes('.')) {
    throw new Error("key's path should divided by dot (.): key1.inner-key.localKey");
  }

  var cloneObj = (0, _clone.default)(obj);
  var keys = property.split(".");
  var sortKey = keys.pop();

  if (!sortKey) {
    throw new Error("Not found a key");
  }

  var aPath = keys.join(".");
  var a = (0, _select.default)(cloneObj, aPath);
  var aSorted = sortObjectsInArrayByProperty(a, sortKey, asc, ignoreCase);
  return (0, _pathToObject.default)(aPath, aSorted, cloneObj);
}

function sortDescObjectsInArrayByProperty(obj, property) {
  var ignoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return sortObjectsInArrayByProperty(obj, property, false, ignoreCase);
}
//# sourceMappingURL=sortObjectsInArrayByProperty.js.map