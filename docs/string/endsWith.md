## endsWith

> STRING

### Description

Checks if a string ends with the given target substring.

Thin wrapper over `String.prototype.endsWith`.

### Use

```ts
import { endsWith } from '@feugene/mu/string'

endsWith('hello world', 'world') // true
endsWith('hello world', 'hello') // false
```

### Examples

```ts
import { endsWith } from '@feugene/mu/string'

// Basic usage
endsWith('index.ts', '.ts') // true
endsWith('index.ts', '.js') // false

// Case-sensitive
endsWith('Hello', 'lo') // true
endsWith('Hello', 'Lo') // false

// Empty target
endsWith('abc', '') // true
```

### See also

- `startsWith` — check beginning of a string.
- `trimSuffix` — remove a suffix when present.

