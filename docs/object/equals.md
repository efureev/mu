## equals

> OBJECT

### Description

Deeply compares the contents of **two or more objects** using strict equality.

Supports nested plain objects, arrays, Dates, RegExps and wrapper objects like `new String()` / `new Number()`.
Handles `NaN` specially (two `NaN` numbers are treated as equal). Throws if called with fewer than two arguments.

### Use

```ts
import { objectsEqual } from '@feugene/mu/object'

objectsEqual({ a: 1 }, { a: 1 }) // true
```

### Examples

```ts
import { objectsEqual } from '@feugene/mu/object'

// Basic equality
objectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 }) // true
objectsEqual({ a: 1 }, { a: 2 }) // false

// Multiple objects
objectsEqual({ a: 1 }, { a: 1 }, { a: 1 }) // true
objectsEqual({ a: 1 }, { a: 1 }, { a: 2 }) // false

// Nested structures
objectsEqual(
  { user: { id: 1, roles: ['admin'] } },
  { user: { id: 1, roles: ['admin'] } }
) // true

// Dates and RegExp
objectsEqual(
  { created: new Date('2020-01-01T00:00:00Z') },
  { created: new Date('2020-01-01T00:00:00Z') }
) // true

objectsEqual(
  { re: /foo/i },
  { re: /foo/i }
) // true

// NaN handling
objectsEqual({ value: NaN }, { value: NaN }) // true

// Prototype / constructor differences
class A { constructor(public x: number) {} }
class B { constructor(public x: number) {} }

objectsEqual({ v: new A(1) }, { v: new A(1) }) // true
objectsEqual({ v: new A(1) }, { v: new B(1) }) // false

// Incorrect usage (fewer than two arguments)
// objectsEqual({ a: 1 }) // throws Error('Need two or more arguments to compare')
```

### See also

- `merge` — immutable deep merge for plain objects.
- `defaults` — immutable defaults application.

