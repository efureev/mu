## symmetricalDifference

> ARRAY

### Description

Returns the **symmetric difference** of two arrays: values that are present in exactly one of the arrays, but not in
both.

Uses strict equality (`===`) to compare values.

### Use

```ts
import { symmetricalDifference } from '@feugene/mu/array'

symmetricalDifference([1, 2, 3, 4, 5], [1, 4, 8])
// [2, 3, 5, 8]
```

### Examples

```ts
import { symmetricalDifference } from '@feugene/mu/array'

// Basic
symmetricalDifference([1, 2, 3], [3, 4]) // [1, 2, 4]

// No overlap → concat unique values
symmetricalDifference([1, 2], [3, 4]) // [1, 2, 3, 4]

// Full overlap → empty
symmetricalDifference([1, 2], [1, 2]) // []
```

### See also

- `difference` — elements present only in the first array.
- `intersect` — common elements.

