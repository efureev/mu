'use strict'

import isEmpty from '../is/isEmpty'
import forEach from '../core/forEach'
import select from './select'

/**
 *
 * @param {object} object
 * @param {array} paths
 * @returns {object}
 *
 * @example #1
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * pick(object, ['a', 'c']); // => { 'a': 1, 'c': 3 }
 *
 * @example #2
 * var object = { d: { d: { d:1 } }, b: 2 };
 *
 * pick(object, ['d.d.d']); // => { 'd.d.d': 1 }
 *
 * @example #3
 * var object = { a: [ { id:1 }, { id:2 } ], b: 2 };
 *
 * pick(object, ['d.1.id', b]); // => { 'd.1.id': 2, b: 2 }
 */
export default function pick(object, paths) {
  if (isEmpty(object)) {
    return {}
  }

  const res = {}
  forEach(paths, (v) => {
    res[v] = select(object, v)
  })

  return res
}
