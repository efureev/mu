import toString from '../to/toString.mjs';
import { reTrim } from '../core/vars.mjs';
/**
 * This function trim string
 *
 * @param {*} string
 * @returns {string}
 */
export default function trim(string) {
    string = toString(string);
    if (!string) {
        return string;
    }
    return string.replace(reTrim, '');
}
//# sourceMappingURL=trim.mjs.map