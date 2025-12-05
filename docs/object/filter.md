## filter

> OBJECT

### Description

Filters an object's own enumerable key–value pairs using a predicate and returns a **new object** with only the entries
for which the predicate returns `true`.

Under the hood it uses `Object.entries` and `Object.fromEntries`, so only own enumerable string keys are processed.

### Use

```ts
import { filter } from '@feugene/mu/object'

const scores = { John: 2, Sarah: 3, Janet: 1 }
const high = filter(scores, ([name, score]) => score > 1)
// high === { John: 2, Sarah: 3 }
```

### Examples

```ts
import { filter } from '@feugene/mu/object'

// Basic numeric filter
const scores = { John: 2, Sarah: 3, Janet: 1 }
filter(scores, ([, score]) => score >= 2) // { John: 2, Sarah: 3 }

// Filter by key
const settings = { debug: true, featureX: false, featureY: true }
filter(settings, ([key]) => key.startsWith('feature'))
// { featureX: false, featureY: true }

// Immutability: original is not changed
const original = { a: 1, b: 2 }
const filtered = filter(original, ([, v]) => v > 1)
// filtered === { b: 2 }
// original === { a: 1, b: 2 }

// Empty object
filter({}, () => true) // {}
```

### See also

- `pick` — pick properties by explicit keys.
- `removeEmpty` — recursively remove empty values.

