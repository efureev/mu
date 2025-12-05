## isBlob / isBlobs

> IS

### Description

Blob predicates (browser / Web API oriented).

- `isBlob(value)` — checks if a single value is an instance of `Blob`.
- `isBlobs(...values)` — returns `true` if **all** provided values are `Blob` instances.

Works in environments where the global `Blob` constructor is available. In Node 22+ this is exposed via the
standard Web APIs.

### Use

```ts
import { isBlob, isBlobs } from '@feugene/mu/is'

const blob = new Blob(['hello'], { type: 'text/plain' })

isBlob(blob) // true
isBlob('not a blob') // false

isBlobs(blob, new Blob()) // true
```

### Examples

```ts
import { isBlob, isBlobs } from '@feugene/mu/is'

// Single value
isBlob(new Blob()) // true
isBlob({} as any) // false

// Multiple values
isBlobs(new Blob(), new Blob(['1'])) // true
isBlobs(new Blob(), 'x' as any) // false

// Null / undefined
isBlob(null as any) // false
isBlob(undefined as any) // false
```

### See also

- `isBuffer` — Node.js Buffer check.
- `isTypedArray` — typed array instances.

