## isFloat / isFloats / isFloatCanonical

> IS

### Description

Float predicates.

- `isFloat(value)` — checks if a single value is a floating‑point number (non‑integer) after numeric coercion.
- `isFloats(...values)` — variadic version: returns `true` if all provided values are floats; throws if called with no
  arguments or if any value is not numeric.
- `isFloatCanonical(value)` — checks via regex that a **string representation** of a number matches the canonical
  float pattern (e.g. `'2.0'`, `'-2.0'`, `'3.14'`).

Under the hood:
- `isFloat` uses `Number.parseFloat` и проверяет, что `n % 1 !== 0` (не целое число).
- `isFloats` сначала пытается привести все параметры к числу, выбрасывая ошибку, если что‑то не парсится в число.
- `isFloatCanonical` использует регулярку `reIsFloat` из `~/core/vars`.

### Use

```ts
import { isFloat, isFloats, isFloatCanonical } from '@feugene/mu/is'

isFloat(2.2) // true
isFloat(2) // false

isFloats('2.2', '+3.5') // true

isFloatCanonical('2.0') // true
isFloatCanonical('2') // false
```

### Examples

```ts
import { isFloat, isFloats, isFloatCanonical } from '@feugene/mu/is'

// Basic floats
isFloat(2.2) // true
isFloat(-2.5) // true
isFloat('3.14') // true

// Integers are not floats
isFloat(2) // false
isFloat('2') // false

// Strings that parse to floats
isFloat('2.0') // true
isFloat('-0.5') // true

// Variadic predicate
isFloats('2.2', '-3.5') // true
// isFloats() // throws: at least one value required
// isFloats('foo') // throws: non-numeric value

// Canonical representation
isFloatCanonical('2.0') // true
isFloatCanonical('-2.0') // true
isFloatCanonical('3.14') // true
isFloatCanonical('2') // false
isFloatCanonical('2.') // false (depends on regex)
```

### See also

- `isInteger` — integer-only predicate.
- `isNumeric` — any finite number or numeric string.
