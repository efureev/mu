## arrayEach

> ARRAY

### Description

Specialized `forEach` for arrays.

Iterates over each element of an array, calling the iteratee with `(value, index, array)` and returning the original
array. Short-circuits are not supported: you should use regular loops if you need early exit.

### Use

```ts
import { arrayEach } from '@feugene/mu/array'

arrayEach([1, 2, 3], (value, index) => {
  console.log(index, value)
})
// logs: 0 1, 1 2, 2 3
```

### Examples

```ts
import { arrayEach } from '@feugene/mu/array'

// Basic iteration
const input = [1, '2', {}, []]
const result: any[] = []

arrayEach(input, (value, index) => {
  result.push([index, value])
})

// result === [ [0, 1], [1, '2'], [2, {}], [3, []] ]
// input is not modified structurally (кроме возможных мутаций самих элементов).

// Chaining-style usage (returns the same array)
const arr = [1, 2, 3]
const same = arrayEach(arr, v => v)
// same === arr
```

### See also

- `forEach` — generic iterator for arrays/objects.

