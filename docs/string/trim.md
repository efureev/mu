## trim

> STRING

### Description

Trims leading and trailing whitespace from a string.

Wrapper around `String.prototype.trim`.

### Use

```ts
import { trim } from '@feugene/mu/string'

trim('  hello  ') // 'hello'
```

### Examples

```ts
import { trim } from '@feugene/mu/string'

// Spaces
trim('   foo   ') // 'foo'

// Tabs and newlines
trim('\tfoo\n') // 'foo'

// Empty string
trim('') // ''
```

### See also

- `clearSpaces` — collapse and normalize internal spaces.
- `trimAny` — trim custom characters.

