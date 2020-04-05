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
 *
 * @param {object} from
 * @param {string} selector
 * @param {string} defaultValue [divider=undefined]
 * @param {string} divider [divider='.']
 * @returns {*}
 */
export default function select(from, selector, defaultValue = undefined, divider = '.') {
  return selector.split(divider).reduce(function (previous, current) {
    return (previous && previous[current]) || defaultValue
  }, from)
}
