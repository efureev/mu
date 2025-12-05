## upperFirst

> STRING

### Description

Converts the first character of a string to upper case, leaving the rest unchanged.

If the string is empty, returns an empty string.

### Use

```ts
import { upperFirst } from '@feugene/mu/string'

upperFirst('hello') // 'Hello'
```

### Examples

```ts
import { upperFirst } from '@feugene/mu/string'

// Basic
upperFirst('hello') // 'Hello'

// Already capitalized
upperFirst('Hello') // 'Hello'

// Single character
upperFirst('a') // 'A'

// Empty string
upperFirst('') // ''
```

### See also

- `titleCase` — capitalize first character of every word.
- `camelCase` / `pascalCase` — casing helpers.

