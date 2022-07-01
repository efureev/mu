# toQueryObjects

> <small>OBJECT</small>

## Description

Converts a `name` - `value` pair to an array of objects with support for nested structure.

## Use

```js
import toQueryObjects from '@feugene/mu/src/object/toQueryObjects.js'
```

## Examples

```js
const objects = toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);

objects === [
  {name: 'hobbies', value: 'reading'},
  {name: 'hobbies', value: 'cooking'},
  {name: 'hobbies', value: 'swimming'},
];
```

```js
const objects = toQueryObjects(
  'dateOfBirth', {
    day  : 3,
    month: 8,
    year : 1987,
    extra: {
      hour  : 4,
      minute: 30,
    },
  },
  true // Recursive
);

// objects then equals:
[
  {name: 'dateOfBirth[day]', value: 3},
  {name: 'dateOfBirth[month]', value: 8},
  {name: 'dateOfBirth[year]', value: 1987},
  {name: 'dateOfBirth[extra][hour]', value: 4},
  {name: 'dateOfBirth[extra][minute]', value: 30},
];
```
