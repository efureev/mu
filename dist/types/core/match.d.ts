interface casesObjectType extends Record<PropertyKey, any> {
}
type casesType = casesObjectType | [() => PropertyKey, any][];
type matchOptions = {
    strict?: boolean;
    default?: any;
};
/**
 * @param {*} expr
 * @param {object|array} cases
 * @param {matchOptions} options
 * @return {*}
 */
export default function match(expr: any, cases: casesType, options?: matchOptions): any;
export {};
//# sourceMappingURL=match.d.ts.map