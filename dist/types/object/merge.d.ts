/**
 * Merge objects recursively
 *
 *     var js = {
 *         companyName: 'JS',
 *         products: ['JS', 'GWT', 'Designer'],
 *         isSuperCool: true,
 *         office: {
 *             size: 2000,
 *             location: 'Palo Alto',
 *             isFun: true
 *         }
 *     };
 *
 *     var newStuff = {
 *         companyName: 'Jacksonville',
 *         products: ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
 *         office: {
 *             size: 40000,
 *             location: 'Redwood City'
 *         }
 *     };
 *
 *     const result = merge(js, newStuff);
 *
 *     {
 *         companyName: 'Jacksonville',
 *         products: ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
 *         isSuperCool: true,
 *         office: {
 *             size: 40000,
 *             location: 'Redwood City',
 *             isFun: true
 *         }
 *     }
 */
declare type record = Record<PropertyKey, any>;
export default function merge<T extends Partial<record>>(original: Partial<T>, ...values: Partial<T>[]): T;
export {};
//# sourceMappingURL=merge.d.ts.map