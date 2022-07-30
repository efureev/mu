# remove

> <small>OBJECT</small>

## Description

Remove value by deep key in object(array).

## Use

```js
import { remove } from '@feugene/mu'
```

## Examples

### Remove by string key

```js
remove({label: 'Root'}, 'label') // {}
remove({label: 'Root'}, 'test') // { label: 'Root' }
remove({label: 'Root', items: {}}, 'items') // { label: 'Root' }
remove({label: 'Root', items: {k: 1}}, 'items.k') // { label: 'Root', items: {} }
remove({label: 'Root', items: {k: 1, v: 2}}, 'items.k') // { label: 'Root', items: { v: 2 } }

remove(
  {
    label: 'Root',
    items: {k: 1, v: 2, items: {k: 3, v: 4}},
  },
  'items.items.k'
) // { label: 'Root', items: { k: 1, v: 2, items: { v: 4 } } })

remove(
  {
    label: 'Root',
    items: {
      k    : 1,
      v    : 2,
      items: {k: 3, v: 4}
    }
  }, 'items.k') === {
  label: 'Root',
  items: {
    v    : 2,
    items: {k: 3, v: 4},
  },
}
remove({label: 'Root', items: [1, 2]}, 'items.1') // { label: 'Root', items: [1] })
```

```js
const obj = {
  key  : 0,
  label: 'Root',
  items: {
    one: {
      key     : 1,
      items   : {
        two: {
          key  : 2,
          items: {val: 111},
        },
      },
      children: [
        {
          key  : 2,
          label: 'Two',
          val  : 111,
          items: {},
        },
        {
          key  : 4,
          label: 'Four',
          val  : 444,
        },
      ],
    },
  },
}

remove(obj, 'items.one.children.1')
===
{
  key  : 0,
  label: 'Root',
  items: {
    one: {
      key     : 1,
      items   : {
        two: {
          key  : 2,
          items: {val: 111},
        },
      },
      children: [
        {
          key  : 2,
          label: 'Two',
          val  : 111,
          items: {},
        },
      ],
    },
  },
};

remove(obj, 'items.one.children.1.key')
===
{
  key  : 0,
  label: 'Root',
  items: {
    one: {
      key     : 1,
      items   : {
        two: {
          key  : 2,
          items: {val: 111},
        },
      },
      children: [
        {
          key  : 2,
          label: 'Two',
          val  : 111,
          items: {},
        },
        {
          label: 'Four',
          val  : 444,
        },
      ],
    },
  },
}
```
