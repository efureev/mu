/** Used as a reference to the global object. */
import freeGlobal from './free/freeGlobal'
import freeSelf from './free/freeSelf'

export default freeGlobal || freeSelf || new Function('return this')()
