const preserveCamelCase = (value) => {
    let isLastCharLower = false;
    let isLastCharUpper = false;
    let isLastLastCharUpper = false;
    for (let i = 0; i < value.length; i++) {
        const character = value[i];
        if (isLastCharLower && /[A-Za-z]/.test(character) && character.toUpperCase() === character) {
            value = value.slice(0, i) + '-' + value.slice(i);
            isLastCharLower = false;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = true;
            i++;
        }
        else if (isLastCharUpper &&
            isLastLastCharUpper &&
            /[A-Za-z]/.test(character) &&
            character.toLowerCase() === character) {
            value = value.slice(0, i - 1) + '-' + value.slice(i - 1);
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = false;
            isLastCharLower = true;
        }
        else {
            isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
        }
    }
    return value;
};
const camelCase = (input, options) => {
    options = Object.assign({ pascalCase: false }, (options ? options : {}));
    const postProcess = (x) => options && options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;
    let str = typeof input === 'string'
        ? input.trim()
        : input
            .map(x => x.trim())
            .filter(x => x.length)
            .join('-');
    if (str.length === 0) {
        return '';
    }
    if (str.length === 1) {
        return options.pascalCase ? str.toUpperCase() : str.toLowerCase();
    }
    const hasUpperCase = str !== str.toLowerCase();
    if (hasUpperCase) {
        str = preserveCamelCase(str);
    }
    str = str
        .replace(/^[ ._\-]+/, '')
        .toLowerCase()
        .replace(/[ ._\-]+(\w|$)/g, (_, p1) => p1.toUpperCase())
        .replace(/\d+(\w|$)/g, m => m.toUpperCase());
    return postProcess(str);
};
export const pascalCase = (input) => {
    return camelCase(input, { pascalCase: true });
};
export default camelCase;
//# sourceMappingURL=camelCase.js.map