"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remove;

var _isObject = _interopRequireDefault(require("../is/isObject"));

var _toNumber = require("../to/toNumber");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get value by deep key in object(array)
 *
 * @example
 * const obj = {
        key  : 0,
        label: 'Root',
        items: {
            one: {
                key     : 1,
                label   : 'One',
                val     : 111,
                items   : {
                    two: {
                        key  : 2,
                        label: 'Two',
                        val  : 111,
                        items: {},
                    },
                },
                children: [{
                    key  : 2,
                    label: 'Two',
                    val  : 111,
                    items: {},
                }, {
                    key  : 4,
                    label: 'Four',
                    val  : 444,
                }],
            },
        },
    }

 * remove(obj, 'items.one.children.1.key')
 * remove(obj, 'items.one')
 * remove(obj, 'label')
 * remove(obj, 'items/one/items/two/items','/')
 *
 * @param {object} object
 * @param {string|array} selector
 * @param {string} divider [divider='.']
 * @returns {object}
 */
function remove(object, selector) {
  var divider = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';

  if (typeof selector === 'string') {
    selector = [selector];
  }

  var removeFromObject = function removeFromObject(from, keys) {
    if (keys.length > 1) {
      if (from[keys[0]] !== undefined) {
        if (Array.isArray(from[keys[0]]) || (0, _isObject.default)(from[keys[0]])) {
          removeFromObject(from[keys[0]], keys.slice(1));
        }
      }
    } else {
      if (Array.isArray(from)) {
        from.splice((0, _toNumber.stringToNumber)(keys[0]), 1);
      } else if ((0, _isObject.default)(from)) {
        delete from[keys[0]];
      }
    }
  };

  if (Array.isArray(selector)) {
    selector.forEach(function (v) {
      removeFromObject(object, v.split(divider));
    });
  }

  return object;
}
//# sourceMappingURL=remove.js.map