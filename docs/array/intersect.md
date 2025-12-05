## intersect

> ARRAY

### Description

Returns a new array of values that are present in **both** input arrays.

Uses strict equality (`===`) to compare values.

### Use

```ts
import { intersect } from '@feugene/mu/array'

intersect([1, 2, 3, 4, 5], [1, 4, 8]) // [1, 4]
```

### Examples

```ts
import { intersect } from '@feugene/mu/array'

// Simple intersection
intersect([1, 2, 3], [2, 3, 4]) // [2, 3]

// No intersection
intersect([1, 2], [3, 4]) // []

// With objects (=== semantics)
const a = { id: 1 }
const b = { id: 1 }

intersect([a, b], [b]) // [b]
```

### See also

- `intersectAll` — intersection of multiple arrays.
- `difference` — elements present only in the first array.

