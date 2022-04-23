# tap

> <small>CORE</small>

## Description

This method invokes `interceptor` and returns `value`.

## Use

```js
import tap from '@feugene/mu/src/src/core/tap.js'
```

## Examples

```js
tap('test') // 'test'
tap([1, 2, 3], (value) => value.pop()) // [1,2]
tap({b: 2, a: 'test'}, (value) => delete value.a) // {b: 2}
tap(() => 100) // 100
tap(() => 100), (value) => value / 2 // 50
```
