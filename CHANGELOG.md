# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][keepachangelog]
and this project adheres to [Semantic Versioning][semver].

## [unreleased]

## [2.21.0] - 2021-03-17

### Added

- Add function: `pad`, `padEnd` to `string` space

## [2.20.2] - 2021-03-10

### Fixed

- Fixed function `String.padStart`

## [2.20.1] - 2021-02-26

### Fixed

- Fixed function `Object.select`: now it can return all empty values (`null`,`undefined`,`''`) if key defined

## [2.20.0] - 2021-02-17

### Added

- Add function: `removeEmpty` to `object` space

## [2.19.0] - 2021-02-14

### Added

- Add function: `flip` to `object` space
- Add new functions: `replaceByTemplate`,`strtr` to `string` space
- Add new functions: `utf8Tob64Safe`,`b64ToUtf8Safe` to `utils` space

## [2.18.0] - 2021-02-02

### Added

- Add new functions: `isFloat`,`isFloats`,`isFloatCanonical` to `is` space

## [2.17.0] - 2021-01-28

### Added

- Add new function `filter` to Object space

## [2.16.1] - 2020-11-12

### Added

- In methods in Object space `toQueryString` and `fromQueryString` added params `options`

### Fixed

- Fix method base64-functions for Node

## [2.15.0] - 2020-10-14

### Added

- new checker `isBlob` to `is`

## [2.14.0] - 2020-06-03

### Added

- Two util-functions: `utf8ToB64` and `b64ToUtf8`

## [2.13.0] - 2020-04-16

### Added

- A function `bind` to `Core`
- A new group: `Structures`
- A struct `Stack` to `Structures`
- A struct `Queue` to `Structures`

## [2.12.0] - 2020-04-05

### Added

- A function `tap` to `Core`

### Fixed

- A function `isNumeric` from `Is`. Before `[..]` had been equal `true`  

## [2.11.0] - 2020-04-05

### Added

- A function `values` to `Object`
- A function `toArray` to `To`
- A function `hasUnicode` to `String`

## [2.10.0] - 2020-03-25

### Added

- A function `defaults` to `Object`

## [2.9.0] - 2020-03-12

### Added

- A function `pathToObject` to `Object`

## [2.7.0] - 2020-02-07

### Added

- A function `pick` to `Object`

## [2.6.0] - 2020-01-23

### Added

- A function `camelCase` to `String`
- A function `pascalCase` to `String`

## [2.5.0] - 2019-12-22

### Added

- A function `isArrayLike` to `Is`
- A function `isArguments` to `Is`
- A function `isLength` to `Is`
- A function `isBuffer` to `Is`
- A function `every` to `Array`
- A function `forEach` to `Core`
- A function `toFinite` to `To`
- A function `toInteger` to `To`
- a section `To` and move into function `toNumber`
- Written tests

### Removed

- The section `number`

## [2.4.0] - 2019-11-16

### Added

- A function `clear` to Array
- A function `intersect` to Array
- A function `random` to Array
- A function `intersectAll` to Array
- A function `difference` to Array
- A function `symmetricalDifference` to Array

[unreleased]: https://github.com/efureev/mu/compare/v2.21.0...HEAD
[2.21.0]: https://github.com/efureev/mu/compare/v2.20.0...v2.21.0
[2.20.0]: https://github.com/efureev/mu/compare/v2.15.0...v2.20.0
[2.15.0]: https://github.com/efureev/mu/compare/v2.14.0...v2.15.0
[2.14.0]: https://github.com/efureev/mu/compare/v2.13.0...v2.14.0
[2.13.0]: https://github.com/efureev/mu/compare/v2.12.0...v2.13.0
[2.12.0]: https://github.com/efureev/mu/compare/v2.11.0...v2.12.0
[2.11.0]: https://github.com/efureev/mu/compare/v2.10.0...v2.11.0
[2.10.0]: https://github.com/efureev/mu/compare/v2.9.0...v2.10.0
[2.9.0]: https://github.com/efureev/mu/compare/v2.7.0...v2.9.0
[2.7.0]: https://github.com/efureev/mu/compare/v2.6.0...v2.7.0
[2.6.0]: https://github.com/efureev/mu/compare/v2.5.0...v2.6.0
[2.5.0]: https://github.com/efureev/mu/compare/v2.4.0...v2.5.0
[2.4.0]: https://github.com/efureev/mu/releases/tag/v2.4.0

[keepachangelog]:https://keepachangelog.com/en/1.1.0/
[semver]:https://semver.org/spec/v2.0.0.html
