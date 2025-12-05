## sortDescObjectsInArrayByProperty

> SORT

### Description

Sorts an array of objects **in descending order** by a given property path.

The property path can be nested using dot notation (e.g. `'user.score'`).

### Use

```ts
import { sortDescObjectsInArrayByProperty } from '@feugene/mu/sort'

const items = [
  { id: 1, score: 10 },
  { id: 2, score: 30 },
  { id: 3, score: 20 },
]

sortDescObjectsInArrayByProperty(items, 'score')
// [ { id: 2, score: 30 }, { id: 3, score: 20 }, { id: 1, score: 10 } ]
```

### Examples

```ts
import { sortDescObjectsInArrayByProperty } from '@feugene/mu/sort'

// Nested property
const posts = [
  { id: 1, meta: { views: 10 } },
  { id: 2, meta: { views: 50 } },
  { id: 3, meta: { views: 30 } },
]

sortDescObjectsInArrayByProperty(posts, 'meta.views')
// [ { id: 2, meta: { views: 50 } }, { id: 3, meta: { views: 30 } }, { id: 1, meta: { views: 10 } } ]

// Stable for equal values (order kept for equal keys, depending on implementation)
```

### See also

- `sortObjectsInArrayByProperty` — ascending sort by property.

