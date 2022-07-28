/**
 * Get value by deep key in object(array)
 *
 * @example
 * const obj = {
        key  : 0,
        label: 'Root',
        items: {
            one: {
                key     : 1,
                label   : 'One',
                val     : 111,
                items   : {
                    two: {
                        key  : 2,
                        label: 'Two',
                        val  : 111,
                        items: {},
                    },
                },
                children: [{
                    key  : 2,
                    label: 'Two',
                    val  : 111,
                    items: {},
                }, {
                    key  : 4,
                    label: 'Four',
                    val  : 444,
                }],
            },
        },
    }

 * select(obj, 'items.one.children.1.key') // 4
 * select(obj, 'items.one.children.3.key', 0) // 0
 * select(obj, 'items/one/items/two/items',undefined,'/') // {}
 * select({key:null}, 'key') // null
 * select({key:''}, 'key') // ''
 * select({key:undefined}, 'key', '111') // undefined
 *
 * @param {object} from
 * @param {string} selector
 * @param {string} defaultValue [divider=undefined]
 * @param {string} divider [divider='.']
 * @returns {*}
 */
export default function select(from: Record<PropertyKey, any>, selector: string, defaultValue?: any, divider?: string | RegExp): Record<PropertyKey, any>;
//# sourceMappingURL=select.d.ts.map