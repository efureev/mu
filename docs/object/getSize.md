## getSize

> OBJECT

### Description

Returns the **number of own enumerable properties** of an object.

Throws an error if the argument is not a plain object.

### Use

```ts
import { getSize } from '@feugene/mu/object'

getSize({ a: 1, b: [], c: {} }) // 3
```

### Examples

```ts
import { getSize } from '@feugene/mu/object'

// Basic
getSize({}) // 0
getSize({ a: 1 }) // 1
getSize({ a: 1, b: 2, c: 3 }) // 3

// Inherited properties are ignored
const base = { a: 1 }
const obj = Object.create(base)
obj.b = 2
getSize(obj) // 1 (only own key 'b')

// Non-object throws
// getSize(null as any)     // throws Error('Param is not object')
// getSize('test' as any)   // throws Error('Param is not object')
```

### See also

- `values` — get array of own enumerable values.
- `flip` — swap keys and values.

