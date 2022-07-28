interface casesObjectType extends Record<PropertyKey, any> {
    default?: any;
}
declare type casesType = casesObjectType | [() => PropertyKey, any][];
/**
 * @param {*} expr
 * @param {object|array} cases
 * @param {boolean} strict Strict comparison (===) or (==). For example, it should be used for digit case-keys.
 * @return {*}
 */
export default function match(expr: any, cases: casesType, strict?: boolean): any;
export {};
//# sourceMappingURL=match.d.ts.map