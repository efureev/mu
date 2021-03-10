import pregQuote from '../utils/pregQuote'

/**
 * Replace all entries in string according by map
 *
 * @param {string} string
 * @param {{}} map
 * @return {string}
 */
export function replaceByTemplate(string, map) {
  let cmpString = '',
    offset = 0,
    find = -1,
    addString = ''
  for (let index = 0; index < string.length; index++) {
    cmpString += '0'
  }

  for (const fr in map) {
    offset = 0
    while ((find = string.indexOf(fr, offset)) !== -1) {
      if (Number.parseInt(cmpString.slice(find, find + fr.length)) !== 0) {
        offset = find + 1
        continue
      }

      for (let k = 0; k < map[fr].length; k++) {
        addString += '1'
      }

      cmpString = cmpString.slice(0, find) + addString + cmpString.slice(find + fr.length, cmpString.length)
      string = string.slice(0, find) + map[fr] + string.slice(find + fr.length, string.length)
      offset = find + map[fr].length + 1
      addString = ''
    }
  }
  return string
}

export default function strtr(string, from, to) {
  if (typeof from === 'object') {
    return replaceByTemplate(string, from)
  }

  for (let index = 0; index < from.length; index++) {
    string = string.replace(new RegExp(pregQuote(from.charAt(index)), 'g'), to.charAt(index))
  }

  return string
}
