## times

> UTILITIES

### Description

Invokes the iteratee function `n` times, returning an array of the results of each invocation.

Common patterns: generate ranges, mock data, repeated computations.

### Use

```ts
import { times } from '@feugene/mu/utils'

times(3, i => i)
// [0, 1, 2]
```

### Examples

```ts
import { times } from '@feugene/mu/utils'

// Basic range
times(5, i => i) // [0, 1, 2, 3, 4]

// Random numbers
times(3, () => Math.random()) // [0.12..., 0.87..., 0.45...] (example)

// Objects
times(3, i => ({ id: i + 1 }))
// [ { id: 1 }, { id: 2 }, { id: 3 } ]

// Side-effects
const result: number[] = []
times(3, i => {
  result.push(i * 2)
})
// result === [0, 2, 4]
```

### See also

- `toArray` — convert various values to arrays.

