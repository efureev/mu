import select from '../../src/object/select'

describe('select', () => {
  const obj = {
    key: 0,
    label: 'Root',
    items: {
      one: {
        key: 1,
        label: 'One',
        val: 111,
        items: {
          two: {
            key: 2,
            label: 'Two',
            val: 111,
            items: {},
          },
        },
        children: [
          {
            key: 2,
            label: 'Two',
            val: 111,
            items: {},
          },
          {
            key: 4,
            label: 'Four',
            val: 444,
          },
        ],
      },
    },
  }

  it('basic', () => {
    expect(select(obj, 'label')).toBe('Root')
    expect(select(obj, 'items.one.key')).toEqual(1)
    expect(select(obj, 'items.one.test')).toBeUndefined()
    expect(select(obj, 'items.one.items.two.items')).toEqual({})

    expect(select(obj, 'items.one.items.two.items.ket')).toBeUndefined()
    expect(select(obj, 'items.one.children.1.key')).toEqual(4)
  })

  it('return with default', () => {
    expect(select(obj, 'label', 'test')).toBe('Root')
    expect(select(obj, 'label2', 'test')).toBe('test')
    expect(select(obj, 'items.one.test', undefined)).toBeUndefined()
    expect(select(obj, 'items.one.test', null)).toBeNull()

    expect(select(obj, 'items.one.children.3.key', 0)).toEqual(0)
  })

  it('basic with divider', () => {
    expect(select(obj, 'label', undefined, '/')).toBe('Root')
    expect(select(obj, 'items/one/key', undefined, '/')).toEqual(1)
    expect(select(obj, 'items/one/test', undefined, '/')).toBeUndefined()
    expect(select(obj, 'items/one/items/two/items', undefined, '/')).toEqual({})

    expect(select(obj, 'items::one::items::two::items::ket', undefined, '::')).toBeUndefined()
    expect(select(obj, 'items::one::children::1::key', undefined, '::')).toEqual(4)
  })

  it('key with empty value', () => {
    expect(select({ key: null }, 'key')).toBe(null)
    expect(select({ key: undefined }, 'key')).toBe(undefined)
    expect(select({ key: undefined }, 'key', 111)).toBe(undefined)
    expect(select({ key: '' }, 'key')).toBe('')
    const object = { datas: { data: '', extra: null } }
    expect(select(object, 'datas.data')).toBe('')
    expect(select(object.datas, 'data')).toBe('')
  })
})
