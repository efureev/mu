/** Detect free variable `exports`. */
import freeExports from './free/freeExports';
/** Detect free variable `module`. */
const freeModule = freeExports && typeof module == 'object' && module && !('nodeType' in module) && module;
/** Used to access faster Node.js helpers. */
export default (function () {
    try {
        // Use `util.types` for Node.js 10+.
        return freeModule && freeModule.require && freeModule.require('util').types;
    }
    catch (error) { }
})();
//# sourceMappingURL=node.js.map