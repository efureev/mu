import upperFirst from './upperFirst.mjs';
import clearSpaces from './clearSpaces.mjs';
/**
 * Converts the first character of every word into string to upper case
 *
 * @param {string} string
 * @returns {string}
 */
export default function titleCase(string) {
    return clearSpaces(string).replace(/\w\S*/g, txt => upperFirst(txt));
}
//# sourceMappingURL=titleCase.mjs.map