## Install
```json
{
    "dependencies": {
      "@feugene/mu": "^2.3.0"
    }
}
```

## Test
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
Function | Return | Example
:--- | :--- | :---
isArray | bool | `isArray([1,2]]); // true`
isBoolean | bool | `isBoolean(true, true); // true`
isDate | bool | `isDate(new Date); // true`
isEmpty | bool  | `isEmpty(null, undefined, ''); // true`
isEmptyObject | bool | `isEmptyObject({}}); // true`
isEven | bool | `isEven(2, 4, '8'); // true`
isFunction | bool | `isFunction(()=>{})); // true`
isInteger | bool | `isInteger(12,-21); // true`
isObject | bool | `isObject([], '12', 4, new Function()); // false`
isObjectLike | bool | `isObjectLike([]); // true`
isNumeric | bool | `isNumeric(12,-2.3); // true`
isString | bool | `isString('test'); // true`
isSymbol | bool | `isSymbol(Symbol('a')); // true`
isNil | bool | `isNil(undefined); // true`
isNils | bool | `isNulls(null, undefined, void 0); // true`
isNull | bool | `isNull(null); // true`
isNulls | bool | `isNulls(null, undefined); // false`

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
padStart | string | Add leading zero | `padStart(9,3,'0') // 009`
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
num | string | Formatting number | `num('10000') // '10,000.00'`
numRus | string | Formatting number for Russian | `numRus(1001.20) // '1 001.20'`
fileSize | string | Display number as file size | `fileSize(7900221323) // '7.36 Gb'`
intWord | string | | `intWord(21323) // '21.32K'`
padNumber | string | | `padNumber(2,3) // '002'`
padDateTime | string | | `padDateTime(1) // '01'`
