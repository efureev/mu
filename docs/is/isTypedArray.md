## isTypedArray

> IS

### Description

Checks if a value is a typed array (`Int8Array`, `Uint8Array`, `Float32Array`, etc.).

### Use

```ts
import { isTypedArray } from '@feugene/mu/is'

isTypedArray(new Uint8Array(2)) // true
isTypedArray([1, 2]) // false
```

### Examples

```ts
import { isTypedArray } from '@feugene/mu/is'

isTypedArray(new Uint8Array(2)) // true
isTypedArray(new Float32Array(4)) // true

isTypedArray([] as any) // false
isTypedArray(Buffer.alloc(2) as any) // false
```

### See also

- `isArray` — regular arrays.
- `isBuffer` — Node.js Buffer.

