[![Build Status](https://travis-ci.org/efureev/mu.svg?branch=master)](https://travis-ci.org/efureev/mu)
[![Maintainability](https://api.codeclimate.com/v1/badges/0279a1deefdae66f9e66/maintainability)](https://codeclimate.com/github/efureev/mu/maintainability)
[![Test Coverage](https://api.codeclimate.com/master/badges/0279a1deefdae66f9e66/test_coverage)](https://codeclimate.com/github/efureev/mu/test_coverage)
[![codecov](https://codecov.io/gh/efureev/mu/branch/master/graph/badge.svg)](https://codecov.io/gh/efureev/mu)

# µ
JS Utilities Framework

## Install
```json
{
    "dependencies": {
      "@feugene/mu": "^2.2.1"
    }
}
```

##Test
```bash
jest
```

## Table of Contents

- [Core](#core)
- [Is](#is)
- [Array](#array)
- [Object](#object)
- [Number](#number)
- [String](#string)
- [Date](#date)
- [Format](#format)

## Core
Function | Return | Description
:--- | :--- | :---
clone | mixed | Clone simple variables including array, {}-like objects, DOM nodes and Date without keeping the old reference
equals | bool |Deep comparing the contents of 2 elements using strict equality
toString | string

## Is
Function | Return | Description
:--- | :---| :---
isArray | bool
isBoolean | bool
isDate | bool
isEmpty | bool
isEmptyObject | bool
isEven | bool
isFunction | bool
isInteger | bool
isObject | bool
isNumeric | bool
isString | bool

## Array
Function | Description | Example
:--- | :---| :---
equals | Deep comparing the contents of 2 arrays using strict equality| `equals([1, '2', {}, []], [1, '2', {}, []])`

## Object
Function | Description | Example
:--- | :--- | :--- 
equals | Deep comparing the contents of 2 or more object using strict equality | `equals({k: 1, v: [1,2,{}]}, {k: 1, v: [1,2,{}]})`
getSize | Returns count of properties of the object | `getSize({k: 1, v: []})`
fromQueryString | Converts a query string back into an object | `fromQueryString('foo=1&bar=2')`
merge | Merge 2 or more objects recursively |  | `merge({k: 1}, {v: 'test'}, {k: 2})`
select | Get value by deep key in object(array) | `select(obj, 'key.sub.items.1')`
toQueryString | Takes an object and converts it to an encoded query string | `toQueryString({colors: ['red', 'green', 'blue']}`
toQueryObjects | Converts a `name` - `value` pair to an array of objects with support for nested structure | `toQueryObjects('hobbies', ['reading', 'cooking', 'swimming'])`
      
## Number
Function | Description | Example
:--- | :--- | :---
pad | Add leading zero | `pad(9) // 09`

## String
Function | Description
:--- | :---
trim |

## Date
Function | Description | Example
:--- | :---| :---
elapsed | Returns difference in milliseconds between dates
now | Now date
toString | Date as string

## Format
Function | Description | Example
:--- | :---| :---
num | Formatting number | `num('10000') // 10,000.00`
numRus | Formatting number for Russian | `numRus(1001.20) // 1 001.20`
fileSize | Display number as file size | `fileSize(7900221323) // 7.36 Gb`
intWord | | `intWord(21323) // 21.32K`
