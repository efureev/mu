import { padStart } from '../string/pad.mjs';
import isNil from '../is/isNil.mjs';
export function padNumber(value, targetLength) {
    if (isNil(value)) {
        return '0';
    }
    return padStart(value, targetLength, '0');
}
export function padDateTime(value) {
    if (isNil(value)) {
        return '00';
    }
    return padStart(value, 2, '0');
}
//# sourceMappingURL=pad.mjs.map