## intersectAll

> ARRAY

### Description

Returns a new array of values that are common to **all** provided arrays.

Uses strict equality (`===`) to compare values.

### Use

```ts
import { intersectAll } from '@feugene/mu/array'

intersectAll([1, 2, 3, 4, 5], [1, 4, 8], [1]) // [1]
```

### Examples

```ts
import { intersectAll } from '@feugene/mu/array'

// Two arrays
intersectAll([1, 2, 3], [2, 3, 4]) // [2, 3]

// Three arrays
intersectAll([1, 2, 3], [2, 3, 4], [3, 2]) // [2, 3] (order depends on implementation)

// No common elements
intersectAll([1, 2], [2, 3], [4]) // []
```

### See also

- `intersect` — intersection of two arrays.
- `symmetricalDifference` — symmetric difference.

