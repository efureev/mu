/** Detect free variable `exports`. */
import freeGlobal from './free/freeGlobal'
import freeExports from './free/freeExports'

/** Detect free variable `module`. */
const freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module

/** Detect the popular CommonJS extension `module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports

/** Detect free variable `process` from Node.js. */
const freeProcess = moduleExports && freeGlobal.process

/** Used to access faster Node.js helpers. */
export default (function () {
  try {
    // Use `util.types` for Node.js 10+.
    const types = freeModule && freeModule.require && freeModule.require('util').types

    if (types) {
      return types
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util')
  } catch (error) {}
})()
