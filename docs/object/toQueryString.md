# toQueryString

> <small>OBJECT</small>

## Description

Takes an object and converts it to an encoded query string.

## Use

```js
import toQueryString from '@feugene/mu/src/object/toQueryString.js'
```

## Examples

### Non-recursive

```js
toQueryString({foo: 1, bar: 2}); // "foo=1&bar=2"
toQueryString({foo: null, bar: 2}); // "foo=&bar=2"
toQueryString({'some price': '$300'}); // "some%20price=%24300"
toQueryString({date: new Date(2011, 0, 1)}); // "date=%222011-01-01T00%3A00%3A00%22"
toQueryString({colors: ['red', 'green', 'blue']}); // "colors=red&colors=green&colors=blue"
```

### Recursive

```js
toQueryString(
  {
    username   : 'Jacky',
    dateOfBirth: {
      day  : 1,
      month: 2,
      year : 1911,
    },
    hobbies    : ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
  },
  true // returns the following string (broken down and url-decoded for ease of reading purpose):
);
// username=Jacky
// &dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911
// &hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff
```
