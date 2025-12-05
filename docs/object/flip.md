## flip

> OBJECT

### Description

Swaps keys with values in a flat object.

Creates a new object where each original value becomes a key and each original key becomes the value. If multiple keys
share the same value, the **last one wins**.

### Use

```ts
import { flip } from '@feugene/mu/object'

flip({ A: 1, B: 2, C: 3 })
// { 1: 'A', 2: 'B', 3: 'C' }
```

### Examples

```ts
import { flip } from '@feugene/mu/object'

// Basic
flip({ A: 1, B: 2, C: 3 }) // { 1: 'A', 2: 'B', 3: 'C' }

// Colliding values — last key wins
flip({ a: 'x', b: 'y', c: 'x' }) // { x: 'c', y: 'b' }

// Non-string values become property keys via default coercion
flip({ a: true, b: false, c: null })
// { 'true': 'a', 'false': 'b', 'null': 'c' }

// Empty object
flip({}) // {}
```

### See also

- `values` — get values of an object.
- `getSize` — count own properties.

