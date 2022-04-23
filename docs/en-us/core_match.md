# Match

#### core

## Description

It replaces such constructions as `if-else` and `switch`.

## Examples

Basic usage

```js
const expr = 'Papayas'

const matched = match(expr, {
  Oranges: 'Oranges are $0.59 a pound.',
  Mangoes: 'Mangoes and papayas are $2.79 a pound.',
  Papayas: 'Papayas are $1.70 a pound.',
})

// matched === 'Papayas are $1.70 a pound.'
```

Usage with default case

```js
const expr = 'Papayas'

const matched = match(expr, {
  Oranges: 'Oranges are $0.59 a pound.',
  Mangoes: 'Mangoes and papayas are $2.79 a pound.',
  Papayas: 'Papayas are $1.70 a pound.',
  default: 'Nothing',
})

// matched === 'Nothing'
```

Usage with number keys

```js
const matched = match(4, {
  1      : 'One',
  2      : 'Two',
  4      : 'Four',
  3      : `Three`,
  default: `Unknown Value`,
}, false)

// matched === 'Four'
```

Func as a value

```js
const fourFn = () => 'Four'
const matched = match('four', {
  one  : () => 'One',
  two  : () => 'Two',
  four : fourFn,
  three: () => `Three`,
})

// matched === 'Four'
```

As Expression: keys

```js
const matched = match(2, [
  [() => 2 - 3, `One`],
  [() => 3 - 1, `Two`],
  [() => 1 + 2, `Three`],
])
// matched === 'Two'
```

As Expression: keys & values

```js
const matched = match(-1, [
  [() => 2 - 3, () => `One`],
  [() => 3 - 1, () => `Two`],
  [() => 1 + 2, () => `Three`],
])
// matched === 'One'
```
