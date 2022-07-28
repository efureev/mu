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

 * remove(obj, 'items.one.children.1.key')
 * remove(obj, 'items.one')
 * remove(obj, 'label')
 * remove(obj, 'items/one/items/two/items','/')
 *
 * @param {object} object
 * @param {string|array} selector
 * @param {string} divider [divider='.']
 * @returns {object}
 */
export default function remove(object: Record<PropertyKey, any>, selector: string | string[], divider?: string): Record<PropertyKey, any>;
//# sourceMappingURL=remove.d.ts.map