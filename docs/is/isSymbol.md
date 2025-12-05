## isSymbol

> IS

### Description

Checks if a value is a `Symbol` (primitive or `Symbol` object).

### Use

```ts
import { isSymbol } from '@feugene/mu/is'

isSymbol(Symbol('a')) // true
isSymbol('a') // false
```

### Examples

```ts
import { isSymbol } from '@feugene/mu/is'

isSymbol(Symbol.iterator) // true
isSymbol(Object(Symbol('x'))) // true

isSymbol('Symbol') // false
isSymbol(1 as any) // false
```

### See also

- `isString` — string values.

