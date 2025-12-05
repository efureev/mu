## difference

> ARRAY

### Description

Returns elements from the first array that are **not present** in the second array.

Uses strict equality (`===`) to compare values.

### Use

```ts
import { difference } from '@feugene/mu/array'

difference([2], [1, 4, 8]) // [2]
```

### Examples

```ts
import { difference } from '@feugene/mu/array'

// Basic
difference([1, 2, 3], [2, 4]) // [1, 3]

// No intersection
difference([1, 2], [3, 4]) // [1, 2]

// All removed
difference([1, 2], [1, 2]) // []

// With objects (=== semantics)
const a = { id: 1 }
const b = { id: 1 }

difference([a, b], [a]) // [b]
```

### See also

- `intersect` — intersection of two arrays.
- `symmetricalDifference` — anti-intersection of two arrays.

