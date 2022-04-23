# select

> <small>OBJECT</small>

## Description

Get value by deep-key in object(array).


## Use

```js
import select from '@feugene/mu/src/src/object/select.js'
```

## Examples

Common js for all examples:

```js
const obj = {
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
```

### Basic usage

```js
select(obj, 'label') // 'Root'
select(obj, 'items.one.key') // 1
select(obj, 'items.one.test') // undefined
select(obj, 'items.one.items.two.items') // {}
select(obj, 'items.one.items.two.items.ket') // undefined
select(obj, 'items.one.children.1.key') // 4
```

### Usage with default

```js
select(obj, 'items.one.test', 'def') // 'def'
select(obj, 'items.one.children.3.key', 0) // 0
```

### Usage with custom divider

```js
select(obj, 'items/one/key', undefined, '/') // 1
select(obj, 'items::one::children::1::key', undefined, '::') // 4
```

### Key with empty value

```js
select({key: null}, 'key') // null
select({key: undefined}, 'key') //undefined
select({key: ''}, 'key') // ''
```
