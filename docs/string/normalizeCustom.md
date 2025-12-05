## normalizeCustom

> STRING

### Description

Normalizes a string using a custom regular expression.

Typically used to replace or remove characters that do not match an allowed pattern. Works similarly to
`string.replace(customRegExp, replacement)` but encapsulated as a helper for common patterns.

### Use

```ts
import { normalizeCustom } from '@feugene/mu/string'

// Remove all non-letter characters
normalizeCustom('user-123_name', /[^a-zA-Z]+/g, '')
// 'username'
```

### Examples

```ts
import { normalizeCustom } from '@feugene/mu/string'

// Keep only digits
normalizeCustom('tel: +1 (234) 567-89', /[^0-9]+/g, '')
// '123456789'

// Collapse multiple dashes
normalizeCustom('a---b--c', /-+/g, '-')
// 'a-b-c'
```

### See also

- `normalizeName` — preconfigured normalization for `[0-9a-zA-Z_]`.
- `normalizeKebab` — normalization to kebab-case.

