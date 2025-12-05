## isString / isStrings

> IS

### Description

String predicates.

- `isString(value)` — `true` for string primitives and `String` objects.
- `isStrings(...values)` — `true` if all values are strings.

### Use

```ts
import { isString, isStrings } from '@feugene/mu/is'

isString('test') // true
isString(new String('x')) // true
isString(1) // false
```

### Examples

```ts
import { isString, isStrings } from '@feugene/mu/is'

isString('hello') // true
isString('') // true
isString(123 as any) // false

isStrings('a', 'b', 'c') // true
isStrings('a', 1 as any) // false
```

### See also

- `stringToArray` — convert string to array of characters.
- `clearSpaces` / `trim` — normalize strings.

