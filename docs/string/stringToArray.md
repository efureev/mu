## stringToArray

> STRING

### Description

Converts a string to an array of characters, taking into account Unicode (surrogate pairs) so that composed symbols are
handled correctly.

Used internally by `toArray` and other helpers when splitting strings.

### Use

```ts
import { stringToArray } from '@feugene/mu/string'

stringToArray('test') // ['t', 'e', 's', 't']
```

### Examples

```ts
import { stringToArray } from '@feugene/mu/string'

// Basic ASCII
stringToArray('abc') // ['a', 'b', 'c']

// Unicode emojis (implementation aims to keep glyphs)
stringToArray('👍👍') // ['👍', '👍'] (depending on environment)

// Empty string
stringToArray('') // []
```

### See also

- `hasUnicode` — checks if string contains Unicode symbols.
- `toArray` — converts various values to arrays.

