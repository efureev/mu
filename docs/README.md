## Install

<!-- tabs:start -->

#### **JSON**

Add to `package.json` file the lib as dependency.

```json
{
  "dependencies": {
    "@feugene/mu": "^4.3"
  }
}
```

#### **YARN**

```bash
yarn add @feugene/mu
```

#### **NPM**

```bash
npm install @feugene/mu
```

<!-- tabs:end -->

## Table of Contents

- [Core](#core)
- [Is](#is)
- [Array](#array)
- [Object](#object)
- [String](#string)
- [Date](#date)
- [Format](#format)
- [To](#to)
- [Sort](#sort)
- [Structures](#structures)
- [Utilities](#utilities)

### Core

| Function                   | Return        | Description                                                                                                   |
|:---------------------------|:--------------|:--------------------------------------------------------------------------------------------------------------|
| [clone](core/clone.md)     | mixed         | Clone simple variables including array, {}-like objects, DOM nodes and Date without keeping the old reference |
| [equals](core/equals.md)   | bool          | Deep comparing the contents of 2 elements using strict equality                                               |
| [forEach](core/forEach.md) | array, object | Iterates over elements of `collection` and invokes `iteratee` for each element                                |
| [keys](core/keys.md)       | array         | Creates an array of the own enumerable property names of `object`                                             |
| [match](core/match.md)     | mixed         | It replaces such constructions as `if-else` and `switch`                                                      |
| [tap](core/tap.md)         | mixed         | This method invokes `interceptor` and returns `value`.                                                        |

### Is

| Function                   | Return | Example                                           |
|:---------------------------|:-------|:--------------------------------------------------|
| isArguments                | bool   | `isArguments([1,2]]); // false`                   |
| isArray                    | bool   | `isArray([1,2]]); // true`                        |
| isArrayLike                | bool   | `isArrayLike('abc'); // true`                     |
| isBlob                     | bool   | `isBlob(new Blob([]])); // true`                  |
| isBoolean                  | bool   | `isBoolean(true, true); // true`                  |
| isBuffer                   | bool   | `isBuffer(new Buffer(2)); // true`                |
| isDate                     | bool   | `isDate(new Date); // true`                       |
| isEmpty                    | bool   | `isEmpty(null, undefined, ''); // true`           |
| isEmptyObject              | bool   | `isEmptyObject({}}); // true`                     |
| isEven                     | bool   | `isEven(2, 4, '8'); // true`                      |
| isFloat                    | bool   | `isFloat('2.0')); // false`                       |
| isFloatCanonical           | bool   | `isFloat('2.0')); // true`                        |
| isFloats                   | bool   | `isFloat('2.2','+2.1')); // true`                 |
| isFunction                 | bool   | `isFunction(()=>{})); // true`                    |
| isInteger                  | bool   | `isInteger(12,-21); // true`                      |
| isLength                   | bool   | `isLength(3); // true`                            |
| isNil                      | bool   | `isNil(undefined); // true`                       |
| isNils                     | bool   | `isNulls(null, undefined, void 0); // true`       |
| isNull                     | bool   | `isNull(null); // true`                           |
| isNulls                    | bool   | `isNulls(null, undefined); // false`              |
| isNumeric                  | bool   | `isNumeric(12,-2.3); // true`                     |
| [isObject](is/isObject.md) | bool   | `isObject([], '12', 4, new Function()); // false` |
| isObjectLike               | bool   | `isObjectLike([]); // true`                       |
| isString                   | bool   | `isString('test'); // true`                       |
| isSymbol                   | bool   | `isSymbol(Symbol('a')); // true`                  |
| isTypedArray               | bool   | `isTypedArray(new Uint8Array); // true`           |

### Array

| Function              | Return | Description                                                                      | Example                                                              |
|:----------------------|:-------|:---------------------------------------------------------------------------------|:---------------------------------------------------------------------|
| arrayEach             | array  | A specialized version of `forEach` for arrays                                    | `arrayEach([1, '2', {}, []], (el)=>{...})`                           |
| clear                 | void   | Clear array                                                                      |                                                                      |
| difference            | array  | The difference will output the elements from array A that are not in the array B | `difference([2], [1, 4, 8])); // [2]`                                |
| equals                | bool   | Deep comparing the contents of 2 arrays using strict equality                    | `equals([1, '2', {}, []], [1, '2', {}, []])`                         |
| intersect             | array  | Return common items for two arrays                                               | `intersect([1, 2, 3, 4, 5], [1, 4, 8]); // [1,4]`                    |
| intersectAll          | array  | Return common items for all arrays                                               | `intersectAll([1, 2, 3, 4, 5], [1, 4, 8],[1])); // [1]`              |
| random                | array  | Random function returns random item from array                                   | `random([1,2,3,4,5]]);`                                              |
| symmetricalDifference | array  | will output anti-intersection                                                    | `symmetricalDifference([1, 2, 3, 4, 5], [1, 4, 8]); // [2, 3, 5, 8]` |

### Object

| Function                                   | Return  | Description                                                                               | Example                                                         | Result                       |
|:-------------------------------------------|:--------|:------------------------------------------------------------------------------------------|:----------------------------------------------------------------|:-----------------------------|
| defaults                                   | object  | Add to source object missing properties from other sources                                | `defaults({ a: { b:2 }}, { a: { b:1, c:3 }})`                   | `{a:{ b:2, c:3 }}`           |
| equals                                     | bool    | Deep comparing the contents of 2 or more object using strict equality                     | `equals({k: 1, v: [1,2,{}]}, {k: 1, v: [1,2,{}]})`              |                              |
| filter                                     | object  | Filter props in Object                                                                    | `filter({key1:1, key:4}, ([key, value])=>value > 1)`            | `{key:4}`                    |
| flip                                       | object  | Swap key with value                                                                       | `swap({a:1, b:'test', c:3})`                                    | `{1:'a', 'test':'b', 3:'c'}` |
| fromQueryString                            | object  | Converts a query string back into an object                                               | `fromQueryString('foo=1&bar=2')`                                |                              |
| getSize                                    | int     | Returns count of properties of the object                                                 | `getSize({k: 1, v: []})`                                        |                              |
| logicalAnd                                 | boolean | Logical `AND` by object's values                                                          | `logicalAnd({ a: true, b: true, c: false })`                    | `false`                      |
| [merge](object/merge.md)                   | object  | Merge 2 or more objects recursively                                                       | `merge({k: 1}, {v: 'test'}, {k: 2})`                            |                              |
| [pathToObject](object/pathToObject.md)     | object  | Return Object from sting path                                                             | `pathToObject('key.sub', 1)`                                    | {key:{sub:1}}                |
| [pick](object/pick.md)                     | object  | Creates an object composed of the picked object properties.                               | `pick({a:1, b:2, c:3}, ['a', 'b'])`                             |                              |
| [remove](object/remove.md)                 | object  | Remove value by deep key in object(array)                                                 | `remove(obj, 'key.sub.items.1')`                                |                              |
| [removeEmpty](object/removeEmpty.md)       | object  | Removes all empty values in an `object` recursively                                       | `removeEmpty({val:'hi', val2:null, val3:{}})`                   | `{val:'hi'}`                 |
| [select](object/select.md)                 | mixed   | Get value by deep key in object(array)                                                    | `select(obj, 'key.sub.items.1')`                                |                              |
| sum                                        | Number  | Sum of object's values                                                                    | `sum({ a: 1, b: 2, c: 3 })`                                     | `6`                          |
| [toQueryObjects](object/toQueryObjects.md) | object  | Converts a `name` - `value` pair to an array of objects with support for nested structure | `toQueryObjects('hobbies', ['reading', 'cooking', 'swimming'])` |                              |
| [toQueryString](object/toQueryString.md)   | string  | Takes an object and converts it to an encoded query string                                | `toQueryString({colors: ['red', 'green', 'blue']}`              |                              |
| values                                     | array   | Creates an array of the own enumerable string keyed property values of `object`           | `values('hi')`                                                  | `['h','i']`                  |

### To

| Function                   | Return | Description                          | Example                                |
|:---------------------------|:-------|:-------------------------------------|:---------------------------------------|
| toArray                    | array  | Converts `value` to a array          | `toArray('test') // ['t','e','s','t']` |
| toFinite                   | int    | Converts `value` to a finite integer | `toFinite('-3.2') // 3`                |
| toInteger                  | int    | Converts `value` to a integer        | `toInteger('3.2') // 3`                |
| toNumber                   | int    | Converts `value` to a number         | `toNumber('3.2') // 3.2`               |
| [toString](to/toString.md) | string | Converts `value` to a string         | `toString(1234) // '1234'`             |

### Sort

| Function                                                             | Return       | Description                                           | Example                                                 |
|:---------------------------------------------------------------------|:-------------|:------------------------------------------------------|:--------------------------------------------------------|
| [sortObjectsInArrayByProperty](sort/sortObjectsInArrayByProperty.md) | array-object | Allows to sort an array into an objects by key        | `sortObjectsInArrayByProperty(object, 'list.title')     |
| sortDescObjectsInArrayByProperty                                     | array-object | Allows to sort (DESC) an array into an objects by key | `sortDescObjectsInArrayByProperty(object, 'list.title') |

### String

| Function                                                              | Return | Description                                                          |
|:----------------------------------------------------------------------|:-------|:---------------------------------------------------------------------|
| [camelCase](string/camelCase.md)                                      | string | Convert a dash/dot/underscore/space separated string to camelCase    |
| clearSpaces                                                           | string | Remove extra spaces from string                                      |
| endsWith                                                              | string | Checks if string ends with the given target string                   |
| [hasUnicode](string/hasUnicode.md)                                    | bool   | Checks if `string` contains Unicode symbols                          |
| normalizeCustom                                                       | string | Normalize string by custom RegExp                                    |
| [normalizeName](string/normalizeName.md)                              | string | Normalize string by RegExp `[^0-9a-zA-Z_]`                           |
| [normalizeKebab](string/normalizeKebab.md)                            | string | Normalize string to kebab (by RegExp `[^0-9a-zA-Z\-]`)               |
| [padStart](string/padStart.md)                                        | string | add leading symbols                                                  |
| padEnd                                                                | string | add ending symbols                                                   |
| [pascalCase](string/pascalCase.md)                                    | string | Convert a dash/dot/underscore/space separated string to PascalCase   |
| [removeConsecutiveDuplicates](string/removeConsecutiveDuplicates.md)  | string | Remove consecutive duplicates                                        |
| [replaceByTemplate](string/replaceByTemplate.md)                      | string | Translate characters or replace substrings in string by map          |
| startsWith                                                            | string | Checks if string starts with the given target string                 |
| stringToArray                                                         | string | Converts `string` to an array                                        |
| [strtr](string/strtr.md)                                              | string | Translate characters or replace substrings in string                 |
| titleCase                                                             | string | Converts the first character of every word into string to upper case |
| trim                                                                  | string |                                                                      |
| [trimAny](string/trimAny.md)                                          | string | Trim any characters                                                  |
| [trimPrefix](string/trimPrefix.md)                                    | string | Remove a prefix from a target string                                 |
| [trimSuffix](string/trimSuffix.md)                                    | string | Remove a suffix from a target string                                 |
| upperFirst                                                            | string | Converts the first character of string to upper case                 |

### Date

| Function | Return | Description                                      | Example |
|:---------|:-------|:-------------------------------------------------|:--------|
| elapsed  | int    | Returns difference in milliseconds between dates |         |
| now      | date   | Now date                                         |         |
| toString | string | Date as string                                   |         |

### Format

| Function    | Return | Description                   | Example                             |
|:------------|:-------|:------------------------------|:------------------------------------|
| fileSize    | string | Display number as file size   | `fileSize(7900221323) // '7.36 Gb'` |
| intWord     | string |                               | `intWord(21323) // '21.32K'`        |
| num         | string | Formatting number             | `num('10000') // '10,000.00'`       |
| numRus      | string | Formatting number for Russian | `numRus(1001.20) // '1 001.20'`     |
| padDateTime | string |                               | `padDateTime(1) // '01'`            |
| padNumber   | string |                               | `padNumber(2,3) // '002'`           |

### Utilities

| Function                                | Return | Description                                                                          |
|:----------------------------------------|:-------|:-------------------------------------------------------------------------------------|
| [b64ToUtf8](utils/b64ToUtf8.md)         | string | Decode string from base-64 to Unicode                                                |
| [b64ToUtf8Safe](utils/b64ToUtf8Safe.md) | string | Decode from safe base-64 to Unicode string                                           |
| times                                   | string | Invokes the iteratee `n` times, returning an array of the results of each invocation |
| [utf8ToB64](utils/utf8ToB64.md)         | string | Encode string from Unicode to base-64                                                |
| [utf8Tob64Safe](utils/utf8Tob64Safe.md) | string | Encode from Unicode string to safe base-64                                           |

### Structures

- Stack
- Queue

## Test

```bash
jest
```

or

```bash
yarn test
```
