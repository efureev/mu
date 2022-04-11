/** Used as a reference to the global object. */
import freeGlobal from './free/freeGlobal.js'
import freeSelf from './free/freeSelf.js'

export default freeGlobal || freeSelf || new Function('return this')()
