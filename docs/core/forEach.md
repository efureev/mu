# forEach

> <small>CORE</small>

## Description

Iterates over elements of `collection` and invokes `iteratee` for each element.

## Use

```js
import forEach from '@feugene/mu/src/core/forEach.js'
```

## Examples

```js
let result = 0

forEach([1, 2, 3, 4], (item) => {
  result += item
})

// result === 10
```

```js
const result = {}

const data = {
  id    : 1,
  name  : 'Name',
  list  : [1, 2, 3],
  params: {k1: 'v1', k2: 'v2'},
}

forEach(data, (item, propertyName) => {
  if (isArray(item) && item.length > 0) {
    result[propertyName] = item
  }
  if (!isArray(item) && item && propertyName !== 'id') {
    result[propertyName] = item
  }
})

// result === {
//   name: 'Name',
//   list: [1, 2, 3],
//   params: { k1: 'v1', k2: 'v2' },
// }
```
