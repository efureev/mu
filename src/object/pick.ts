import isEmpty from '~/is/isEmpty'
import forEach from '~/core/forEach'
import select from './select'

export type PickPaths = readonly string[]

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
export default function pick<T extends Record<PropertyKey, any>, K extends string = string>(
  object: T,
  paths: ReadonlyArray<K> | null | undefined
): Partial<Record<K, unknown>> {
  const res: Partial<Record<K, unknown>> = {}
  if (isEmpty(object) || !Array.isArray(paths) || paths.length === 0) {
    return res
  }

  forEach(paths, v => {
    const val = select(object as any, v as unknown as string)
    if (val !== undefined) {
      res[v as K] = val
    }
  })

  return res
}
