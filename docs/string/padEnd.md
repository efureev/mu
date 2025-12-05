## padEnd

> STRING

### Description

Right-pads a string with a given fill character until it reaches a target length.

Wrapper around `String.prototype.padEnd`, with explicit arguments `(value, targetLength, padChar)`.

### Use

```ts
import { padEnd } from '@feugene/mu/string'

padEnd('1', 3, '0') // '100'
```

### Examples

```ts
import { padEnd } from '@feugene/mu/string'

// Basic
padEnd('a', 3, '.') // 'a..'
padEnd('abc', 3, '.') // 'abc' (already long enough)

// Numeric-like strings
padEnd('12', 5, '0') // '12000'
```

### See also

- `padStart` — add leading symbols.
- `padNumber` — zero-pad numbers to fixed width.

