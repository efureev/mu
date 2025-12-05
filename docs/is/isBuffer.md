## isBuffer

> IS

### Description

Checks if a value is a Node.js `Buffer` instance.

Under the hood it reuses the standard `Buffer.isBuffer` when running in a Node environment, with fallbacks for
bundler/browser shims where `Buffer` is polyfilled.

### Use

```ts
import { isBuffer } from '@feugene/mu/is'

isBuffer(Buffer.alloc(2)) // true
isBuffer(new Uint8Array(2)) // false
```

### Examples

```ts
import { isBuffer } from '@feugene/mu/is'

// Node.js buffers
isBuffer(Buffer.from('hi')) // true

// Typed arrays are not buffers
isBuffer(new Uint8Array(2)) // false

// Other types
isBuffer('not a buffer' as any) // false
isBuffer(null as any) // false
```

### See also

- `isBlob` — browser/Web Blob check.
- `isTypedArray` — typed array instances.

