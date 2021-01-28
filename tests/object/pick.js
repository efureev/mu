import { pick } from '../../src/object'

describe('pick', () => {
  const object = { a: 1, b: '2', c: 3 }

  it('basic', () => {
    expect(pick(object, ['a', 'c'])).toEqual({ a: 1, c: 3 })
    expect(pick(object, ['c', 'a'])).toEqual({ a: 1, c: 3 })
    expect(pick(object, ['c', 'c'])).toEqual({ c: 3 })
    expect(pick(object, ['c', 'a', 'a', 'a', 'a'])).toEqual({ a: 1, c: 3 })
  })

  const objectDeep = {
    d: { a: 1, z: { r: 'test' } },
    b: '2',
    c: 3,
    dd: { array: ['one', 'two'], array2: [{ id: 1 }, { id: 2 }] },
  }

  it('deep', () => {
    expect(pick(objectDeep, ['c', 'd.a'])).toEqual({ 'd.a': 1, c: 3 })
    expect(pick(objectDeep, ['c', 'd.z.r'])).toEqual({ 'd.z.r': 'test', c: 3 })
    expect(pick(objectDeep, ['d.z'])).toEqual({ 'd.z': { r: 'test' } })
    expect(pick(objectDeep, ['dd.array.0'])).toEqual({ 'dd.array.0': 'one' })
    expect(pick(objectDeep, ['dd.array2.1'])).toEqual({ 'dd.array2.1': { id: 2 } })
  })

  it('empty', () => {
    expect(pick({}, ['a', 'c'])).toEqual({})
    expect(pick(null, ['a', 'c'])).toEqual({})
    expect(pick(undefined, ['a', 'c'])).toEqual({})

    expect(pick(object, [])).toEqual({})
    expect(pick(object, null)).toEqual({})
    expect(pick(object, undefined)).toEqual({})
    expect(pick(object, ['s', 'z', 'q'])).toEqual({})

    expect(pick(objectDeep, ['d.z.test', 'd.r'])).toEqual({})
  })
})
