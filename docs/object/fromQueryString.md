## fromQueryString

> OBJECT

### Description

Converts a query string back into a plain object.

Uses native `URLSearchParams` for decoding and supports two modes:

- **Non-recursive** (default): each key becomes a property; repeated keys are collected into arrays.
- **Recursive** (`recursive = true`): parses Rails-style bracket syntax into nested objects/arrays
  (e.g. `user[name]=Jack&tags[0]=a&tags[1]=b`).

Security: forbidden keys `"__proto__"`, `"prototype"`, `"constructor"` are ignored at all nesting levels to
prevent prototype pollution.

### Use

```ts
import { fromQueryString } from '@feugene/mu/object'

fromQueryString('foo=1&bar=2')
// { foo: '1', bar: '2' }
```

### Examples

```ts
import { fromQueryString } from '@feugene/mu/object'

// Basic decoding
fromQueryString('foo=1&bar=2')
// { foo: '1', bar: '2' }

// Empty and special characters
fromQueryString('foo=&bar=2')
// { foo: '', bar: '2' }

fromQueryString('some%20price=%24300')
// { 'some price': '$300' }

// Repeated keys → arrays (non-recursive)
fromQueryString('colors=red&colors=green&colors=blue')
// { colors: ['red', 'green', 'blue'] }

// Recursive nested structures
const qs = [
  'user[name]=Jack',
  'user[address][city]=Berlin',
  'tags[0]=coding',
  'tags[1]=music',
  'extra[0][0]=nested',
  'extra[0][1]=stuff',
].join('&')

fromQueryString(qs, true)
// {
//   user: { name: 'Jack', address: { city: 'Berlin' } },
//   tags: ['coding', 'music'],
//   extra: [['nested', 'stuff']],
// }

// Leading question mark is ignored
fromQueryString('?foo=1&bar=2')
// { foo: '1', bar: '2' }

// Proto-pollution attempts are ignored
fromQueryString('__proto__=polluted')
// {}
```

### See also

- `toQueryString` — encode an object into a query string.
- `toQueryObjects` — lower-level helper producing name/value pairs.

