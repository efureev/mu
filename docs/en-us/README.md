## Install
```json
{
    "dependencies": {
      "@feugene/mu": "^2.19"
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
- [String](#string)
- [Date](#date)
- [Format](#format)
- [To](#to)
- [Structures](#structures)
- [Utilities](#utilities)

## Core
Function | Return | Description
:--- | :--- | :---
clone | mixed | Clone simple variables including array, {}-like objects, DOM nodes and Date without keeping the old reference
equals | bool | Deep comparing the contents of 2 elements using strict equality
forEach | array, object | Iterates over elements of `collection` and invokes `iteratee` for each element
key | array | Creates an array of the own enumerable property names of `object`

## Is
Function | Return | Example
:--- | :--- | :---
isArguments | bool | `isArguments([1,2]]); // false`
isArray | bool | `isArray([1,2]]); // true`
isArrayLike | bool | `isArrayLike('abc'); // true`
isBlob | bool | `isBlob(new Blob([]])); // true`
isBoolean | bool | `isBoolean(true, true); // true`
isBuffer | bool | `isBuffer(new Buffer(2)); // true`
isDate | bool | `isDate(new Date); // true`
isEmpty | bool  | `isEmpty(null, undefined, ''); // true`
isEmptyObject | bool | `isEmptyObject({}}); // true`
isEven | bool | `isEven(2, 4, '8'); // true`
isFloat | bool | `isFloat('2.0')); // false`
isFloatCanonical | bool | `isFloat('2.0')); // true`
isFloats | bool | `isFloat('2.2','+2.1')); // true`
isFunction | bool | `isFunction(()=>{})); // true`
isInteger | bool | `isInteger(12,-21); // true`
isLength | bool | `isLength(3); // true`
isNil | bool | `isNil(undefined); // true`
isNils | bool | `isNulls(null, undefined, void 0); // true`
isNull | bool | `isNull(null); // true`
isNulls | bool | `isNulls(null, undefined); // false`
isNumeric | bool | `isNumeric(12,-2.3); // true`
isObject | bool | `isObject([], '12', 4, new Function()); // false`
isObjectLike | bool | `isObjectLike([]); // true`
isString | bool | `isString('test'); // true`
isSymbol | bool | `isSymbol(Symbol('a')); // true`
isTypedArray | bool | `isTypedArray(new Uint8Array); // true`

## Array
Function | Return | Description | Example
:--- | :---| :---| :---
arrayEach | array |  A specialized version of `forEach` for arrays| `arrayEach([1, '2', {}, []], (el)=>{...})`
clear | void |  Clear array | 
difference | array |  The difference will output the elements from array A that are not in the array B | `difference([2], [1, 4, 8])); // [2]` 
equals | bool | Deep comparing the contents of 2 arrays using strict equality| `equals([1, '2', {}, []], [1, '2', {}, []])`
intersect | array |  Return common items for two arrays | `intersect([1, 2, 3, 4, 5], [1, 4, 8]); // [1,4]`
intersectAll | array |  Return common items for all arrays | `intersectAll([1, 2, 3, 4, 5], [1, 4, 8],[1])); // [1]`
random | array |  Random function returns random item from array | `random([1,2,3,4,5]]);`
symmetricalDifference | array |  will output anti-intersection | `symmetricalDifference([1, 2, 3, 4, 5], [1, 4, 8]); // [2, 3, 5, 8]`


## Object
Function | Return | Description | Example | Result
:--- | :--- | :--- | :---  | :--- 
defaults | object | Add to source object missing properties from other sources |  `defaults({ a: { b:2 }}, { a: { b:1, c:3 }})` | `{a:{ b:2, c:3 }}`
equals | bool | Deep comparing the contents of 2 or more object using strict equality | `equals({k: 1, v: [1,2,{}]}, {k: 1, v: [1,2,{}]})` |
filter | object | Filter props in Object | `filter({key1:1, key:4}, ([key, value])=>value > 1)` | `{key:4}`
flip | object | Swap key with value | `swap({a:1, b:'test', c:3})` | `{1:'a', 'test':'b', 3:'c'}`
fromQueryString | object | Converts a query string back into an object | `fromQueryString('foo=1&bar=2')` |
getSize | int | Returns count of properties of the object | `getSize({k: 1, v: []})` |
merge | object | Merge 2 or more objects recursively |  `merge({k: 1}, {v: 'test'}, {k: 2})` |
pathToObject | object | Return Object from sting path | `pathToObject('key.sub', 1)` | {key:{sub:1}}
pick | object | Creates an object composed of the picked object properties. | `pick({a:1, b:2, c:3}, ['a', 'b'])` |
remove | object | Remove value by deep key in object(array) | `remove(obj, 'key.sub.items.1')` |
removeEmpty | object | Removes all empty values in a `object` recursively | `removeEmpty({val:'hi', val2:null, val3:{}})` | `{val:'hi'}`
select | mixed | Get value by deep key in object(array) | `select(obj, 'key.sub.items.1')` |
toQueryObjects | object | Converts a `name` - `value` pair to an array of objects with support for nested structure | `toQueryObjects('hobbies', ['reading', 'cooking', 'swimming'])` |
toQueryString | string | Takes an object and converts it to an encoded query string | `toQueryString({colors: ['red', 'green', 'blue']}` |
values | array | Creates an array of the own enumerable string keyed property values of `object` | `values('hi')` | `['h','i']`
      
## To
Function | Return | Description | Example
:--- | :--- | :---| :---
toArray | array | Converts `value` to a array | `toArray('test') // ['t','e','s','t']`
toFinite | int | Converts `value` to a finite integer | `toFinite('-3.2') // 3`
toInteger | int | Converts `value` to a integer | `toInteger('3.2') // 3`
toNumber | int|float | Converts `value` to a number | `toNumber('3.2') // 3.2`
toString | string | Converts `value` to a string | `toString(1234) // '1234'`

## String
Function | Return | Description
:--- | :---  | :--- 
trim | string |
camelCase | string | Convert a dash/dot/underscore/space separated string to camelCase
clearSpaces | string | Remove extra spaces from string
endsWith | string | Checks if string ends with the given target string
hasUnicode | bool | Checks if `string` contains Unicode symbols
pascalCase | string | Convert a dash/dot/underscore/space separated string to PascalCase
replaceByTemplate | string | Translate characters or replace substrings in string by map
startsWith | string | Checks if string starts with the given target string
strtr | string | Translate characters or replace substrings in string
titleCase | string | Converts the first character of every word into string to upper case
upperFirst | string | Converts the first character of string to upper case

## Date
Function | Return | Description | Example
:--- | :--- | :--- | :---
elapsed | int | Returns difference in milliseconds between dates
now | date | Now date
toString | string | Date as string

## Format
Function | Return | Description | Example
:--- | :--- | :--- | :---
fileSize | string | Display number as file size | `fileSize(7900221323) // '7.36 Gb'`
intWord | string | | `intWord(21323) // '21.32K'`
num | string | Formatting number | `num('10000') // '10,000.00'`
numRus | string | Formatting number for Russian | `numRus(1001.20) // '1 001.20'`
padDateTime | string | | `padDateTime(1) // '01'`
padNumber | string | | `padNumber(2,3) // '002'`

## Utilities
Function | Return | Description
:--- | :--- | :---
b64ToUtf8 | string | Decode string from base-64 to Unicode
b64ToUtf8Safe | string | Decode from safe base-64 to Unicode string
times | string | Invokes the iteratee `n` times, returning an array of the results of each invocation
utf8ToB64 | string | Encode string from Unicode to base-64
utf8Tob64Safe | string | Encode from Unicode string to safe base-64

## Structures

- Stack
- Queue
