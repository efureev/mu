/** Used as a reference to the global object. */
import freeGlobal from './free/freeGlobal.mjs';
import freeSelf from './free/freeSelf.mjs';
export default freeGlobal || freeSelf || new Function('return this')();
//# sourceMappingURL=root.mjs.map