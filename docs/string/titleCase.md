## titleCase

> STRING

### Description

Converts the first character of **every word** in a string to upper case.

Words are separated by whitespace and punctuation (см. реализацию). The rest of each word is left as-is.

### Use

```ts
import { titleCase } from '@feugene/mu/string'

titleCase('hello world') // 'Hello World'
```

### Examples

```ts
import { titleCase } from '@feugene/mu/string'

// Basic
titleCase('lorem ipsum') // 'Lorem Ipsum'

// Mixed case
titleCase('hELLO wORLD') // 'HELLO WORLD' (overall effect depends on implementation)

// With punctuation
titleCase('hello-world') // 'Hello-World'
```

### See also

- `upperFirst` — only first character of string.
- `camelCase` / `pascalCase` — word-based casing helpers.

