# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][keepachangelog]
and this project adheres to [Semantic Versioning][semver].

## [unreleased]

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
  - Written tests.

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

[unreleased]: https://github.com/efureev/mu/compare/v2.7.0...HEAD
[2.7.0]: https://github.com/efureev/mu/compare/v2.6.0...v2.7.0
[2.6.0]: https://github.com/efureev/mu/compare/v2.5.0...v2.6.0
[2.5.0]: https://github.com/efureev/mu/compare/v2.4.0...v2.5.0
[2.4.0]: https://github.com/efureev/mu/releases/tag/v2.4.0

[keepachangelog]:https://keepachangelog.com/en/1.1.0/
[semver]:https://semver.org/spec/v2.0.0.html



# v2.4.0
- Add function `clear` to Array
- Add function `intersect` to Array
- Add function `random` to Array
- Add function `intersectAll` to Array
- Add function `difference` to Array
- Add function `symmetricalDifference` to Array

# v2.3.0
- Fix function `equals` from Core
- Remove function `pad` from Number
- Add function `padNumber` to Format
- Add function `padDateTime` to Format
- Add function `padStart` to String

# v2.2.5
- Add function `isNil` to Is
- Add function `isNils` to Is
- Add function `isNull` to Is
- Add function `isNulls` to Is

# v2.2.4
- Add function `toNumber` to Number
- Add function `isObjectLike` to Is
- Add function `isSymbol` to Is

# v2.2.3
- Add function `startsWith` to String
- Add function `endsWith` to String
- Add function `clearSpaces` to String
- Add function `titleCase` to String
- Add function `upperFirst` to String

# v2.2.2
- Add function `remove` to Object

# v2.2.1
- Merge `humanize` section into `format`
- Add glossary into `README.md`

# v2.2.0
- Change function `equals` from Object: Now, it's DEEP and allows to compare 2 and more entries
- Add function `equals` to Array
- Add function `equals` Core

# v2.1.3
- Add function `select` to Object 

# v2.1.2
- Add auto-deploy to NPM

# v2.1.1
- Add function `merge` to Object:
    
# v2.1.0
- Add Objects fns:
    - equals
    - fromQueryString
    - getSize
    - toQueryObjects
    - toQueryString
    
- Add Core fns:
    - clone
    
- Add Is fns:
    - isObject
    - isFunction

# v2.0.0
- Reformat lib
