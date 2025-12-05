## logicalAnd

> OBJECT

### Description

Performs a logical **AND** over the values of an object's properties.

Iterates over keys and returns `false` as soon as it encounters a strict `false` value. If no property is `false`,
returns `true` (including when the object is empty).

### Use

```ts
import { logicalAnd } from '@feugene/mu/object'

logicalAnd({ a: true, b: true }) // true
```

### Examples

```ts
import { logicalAnd } from '@feugene/mu/object'

// All truthy but not strictly false → true
logicalAnd({ a: true, b: 1, c: 'yes' }) // true

// Any strict false → false
logicalAnd({ a: true, b: false, c: true }) // false

// Non-boolean values
logicalAnd({ a: 0, b: '', c: null }) // true (none is === false)

// Empty object
logicalAnd({}) // true
```

### See also

- `sum` — numeric aggregation over object values.

