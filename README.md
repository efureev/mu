[![Build Status](https://travis-ci.org/efureev/mu.svg?branch=master)](https://travis-ci.org/efureev/mu)
[![Maintainability](https://api.codeclimate.com/v1/badges/0279a1deefdae66f9e66/maintainability)](https://codeclimate.com/github/efureev/mu/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0279a1deefdae66f9e66/test_coverage)](https://codeclimate.com/github/efureev/mu/test_coverage)
[![codecov](https://codecov.io/gh/efureev/mu/branch/master/graph/badge.svg)](https://codecov.io/gh/efureev/mu)

# µ
JS Utilities Framework

## Install
```json
{
    "dependencies": {
      "@feugene/mu": "^2.2.4"
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
Function | Return
:--- | :---
isArray | bool
isBoolean | bool
isDate | bool
isEmpty | bool
isEmptyObject | bool
isEven | bool
isFunction | bool
isInteger | bool
isObject | bool
isObjectLike | bool
isNumeric | bool
isString | bool
isSymbol | bool

## Array
Function | Return | Description | Example
:--- | :---| :---| :---
equals | bool | Deep comparing the contents of 2 arrays using strict equality| `equals([1, '2', {}, []], [1, '2', {}, []])`

## Object
Function | Return | Description | Example
:--- | :--- | :--- | :--- 
equals | bool | Deep comparing the contents of 2 or more object using strict equality | `equals({k: 1, v: [1,2,{}]}, {k: 1, v: [1,2,{}]})`
getSize | int | Returns count of properties of the object | `getSize({k: 1, v: []})`
fromQueryString | object | Converts a query string back into an object | `fromQueryString('foo=1&bar=2')`
merge | object | Merge 2 or more objects recursively |  | `merge({k: 1}, {v: 'test'}, {k: 2})`
select | mixed | Get value by deep key in object(array) | `select(obj, 'key.sub.items.1')`
remove | object | Remove value by deep key in object(array) | `remove(obj, 'key.sub.items.1')`
toQueryString | string | Takes an object and converts it to an encoded query string | `toQueryString({colors: ['red', 'green', 'blue']}`
toQueryObjects | object | Converts a `name` - `value` pair to an array of objects with support for nested structure | `toQueryObjects('hobbies', ['reading', 'cooking', 'swimming'])`
      
## Number
Function | Return | Description | Example
:--- | :--- | :---| :---
pad | string | Add leading zero | `pad(9) // 09`
toNumber | int|float | Converts `value` to a number | `toNumber('3.2') // 3.2`

## String
Function | Return | Description
:--- | :---  | :--- 
trim | string |
clearSpaces | string | Remove extra spaces from string
titleCase | string | Converts the first character of every word into string to upper case
upperFirst | string | Converts the first character of string to upper case
startsWith | string | Checks if string starts with the given target string
endsWith | string | Checks if string ends with the given target string

## Date
Function | Return | Description | Example
:--- | :--- | :--- | :---
elapsed | int | Returns difference in milliseconds between dates
now | date | Now date
toString | string | Date as string

## Format
Function | Return | Description | Example
:--- | :--- | :--- | :---
num | string | Formatting number | `num('10000') // 10,000.00`
numRus | string | Formatting number for Russian | `numRus(1001.20) // 1 001.20`
fileSize | string | Display number as file size | `fileSize(7900221323) // 7.36 Gb`
intWord | string | | `intWord(21323) // 21.32K`
