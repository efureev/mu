import isBoolean from './isBoolean.mjs';
import isNil from './isNil.mjs';
import isNumeric from './isNumeric.mjs';
import isString from './isString.mjs';
import isSymbol from './isSymbol.mjs';
export default function isBasicType(value) {
    return !isAdvancedType(value);
}
export function isAdvancedType(value) {
    return !isNil(value) && (isSymbol(value) || (!isString(value) && !isNumeric(value) && !isBoolean(value)));
}
//# sourceMappingURL=isBasicType.mjs.map