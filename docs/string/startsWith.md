## startsWith

> STRING

### Description

Checks if a string starts with the given target substring.

Thin wrapper over `String.prototype.startsWith`.

### Use

```ts
import { startsWith } from '@feugene/mu/string'

startsWith('hello world', 'hello') // true
startsWith('hello world', 'world') // false
```

### Examples

```ts
import { startsWith } from '@feugene/mu/string'

// Basic
startsWith('index.ts', 'index') // true
startsWith('index.ts', '.ts') // false

// Case-sensitive
startsWith('Hello', 'He') // true
startsWith('Hello', 'he') // false
```

### See also

- `endsWith` — check ending of a string.
- `trimPrefix` — remove a prefix when present.

