import remove from '../../src/object/remove'
import { clone } from '../../src'

describe('remove by string key', () => {
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
    expect(remove({ label: 'Root' }, 'label')).toEqual({})
    expect(remove({ label: 'Root' }, 'test')).toEqual({ label: 'Root' })
    expect(remove({ label: 'Root', items: {} }, 'items')).toEqual({ label: 'Root' })
    expect(remove({ label: 'Root', items: { k: 1 } }, 'items.k')).toEqual({ label: 'Root', items: {} })
    expect(remove({ label: 'Root', items: { k: 1, v: 2 } }, 'items.k')).toEqual({ label: 'Root', items: { v: 2 } })
    expect(
      remove(
        {
          label: 'Root',
          items: { k: 1, v: 2, items: { k: 3, v: 4 } },
        },
        'items.items.k'
      )
    ).toEqual({ label: 'Root', items: { k: 1, v: 2, items: { v: 4 } } })
    expect(remove({ label: 'Root', items: { k: 1, v: 2, items: { k: 3, v: 4 } } }, 'items.k')).toEqual({
      label: 'Root',
      items: {
        v: 2,
        items: { k: 3, v: 4 },
      },
    })
    expect(remove({ label: 'Root', items: { k: 1, v: 2, items: { k: 3, v: 4 } } }, 'items.items')).toEqual({
      label: 'Root',
      items: {
        k: 1,
        v: 2,
      },
    })

    expect(remove({ label: 'Root', items: [1, 2] }, 'items.1')).toEqual({ label: 'Root', items: [1] })

    expect(remove(clone(obj), 'items.one.children.1')).toEqual({
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
          ],
        },
      },
    })

    expect(remove(clone(obj), 'items.one.children.1.key')).toEqual({
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
              label: 'Four',
              val: 444,
            },
          ],
        },
      },
    })

    expect(remove(clone(obj), 'items.one.children.3.key')).toEqual({
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
    })

    expect(remove(clone(obj), 'items.one.children')).toEqual({
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
        },
      },
    })

    expect(remove(clone(obj), 'items.one')).toEqual({ key: 0, label: 'Root', items: {} })
  })
})

describe('remove by array keys', () => {
  it('array', () => {
    expect(remove({ label: 'Root' }, ['label'])).toEqual({})
    expect(remove({ label: 'Root' }, ['test'])).toEqual({ label: 'Root' })
    expect(remove({ label: 'Root' }, ['test', 'label'])).toEqual({})

    expect(remove({ label: 'Root', items: { k: 1, v: 2 } }, ['items.k', 'items.v'])).toEqual({
      label: 'Root',
      items: {},
    })

    expect(
      remove({ label: 'Root', items: { k: 1, v: 2, items: { k: 3, v: 4 } } }, ['items.items.k', 'items.k'])
    ).toEqual({ label: 'Root', items: { v: 2, items: { v: 4 } } })

    expect(
      remove(
        {
          label: 'Root',
          items: {
            k: 1,
            v: 2,
            items: [
              { k: 1, v: 2 },
              { k: 3, v: 4 },
            ],
          },
        },
        ['items.items.0.k']
      )
    ).toEqual({ label: 'Root', items: { k: 1, v: 2, items: [{ v: 2 }, { k: 3, v: 4 }] } })

    expect(
      remove(
        {
          label: 'Root',
          items: {
            k: 1,
            v: 2,
            items: [
              { k: 1, v: 2 },
              { k: 3, v: 4 },
            ],
          },
        },
        ['items.items.0']
      )
    ).toEqual({ label: 'Root', items: { k: 1, v: 2, items: [{ k: 3, v: 4 }] } })

    expect(
      remove(
        {
          label: 'Root',
          items: {
            k: 1,
            v: 2,
            items: [
              { k: 1, v: 2 },
              { k: 3, v: 4 },
            ],
          },
        },
        ['items.items.1', 'items.items.0']
      )
    ).toEqual({ label: 'Root', items: { k: 1, v: 2, items: [] } })
  })
})

describe('remove from array by string key', () => {
  it('array', () => {
    expect(remove([{ label: 'Root' }, { label: 'child' }, { label: 'three' }], '1.label')).toEqual([
      { label: 'Root' },
      {},
      { label: 'three' },
    ])
  })
})
