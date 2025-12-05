## clearSpaces

> STRING

### Description

Removes extra spaces from a string.

Collapses consecutive whitespace characters into a single space and trims leading/trailing whitespace. Useful for
normalizing user input.

### Use

```ts
import { clearSpaces } from '@feugene/mu/string'

clearSpaces('  hello   world  ')
// 'hello world'
```

### Examples

```ts
import { clearSpaces } from '@feugene/mu/string'

// Leading and trailing spaces
clearSpaces('   foo   ') // 'foo'

// Multiple internal spaces
clearSpaces('foo   bar   baz') // 'foo bar baz'

// Tabs and newlines are treated as spaces
clearSpaces('\tfoo\nbar  baz') // 'foo bar baz'

// Empty and already-trimmed strings
clearSpaces('') // ''
clearSpaces('foo') // 'foo'
```

### See also

- `trim` — trim only leading and trailing whitespace.
- `normalizeCustom` — normalize using a custom RegExp.

