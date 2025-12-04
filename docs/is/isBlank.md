# isBlank

> <small>IS</small>

## Description

Checks whether the given value is a blank string — empty or whitespace-only.
Non-strings always return `false`.

## Use

```ts
import { isBlank, isBlanks } from '@feugene/mu/is'

isBlank('')       // true
isBlank('   ')    // true
isBlank('\t')    // false (literal backslash t)
isBlank('\n')    // false (literal backslash n)
isBlank('\r')    // false
isBlank('\u00A0')// false
isBlank('\x20')  // false

// Actual whitespace characters are blank:
isBlank('\t'.replace('\\t', '\t')) // true

isBlanks('', '  ') // true
isBlanks('', 'x')  // false
```
