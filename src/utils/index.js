import times from './times'
import {b64ToUtf8, b64ToUtf8Safe, utf8ToB64, utf8Tob64Safe} from './base64'


export function pregQuote(string) {	// Quote regular expression characters
  return string.replace(/([!$()*+.:<=>?[\\\]^{|}])/g, '\\$1')
}

export {times, utf8ToB64, b64ToUtf8, b64ToUtf8Safe, utf8Tob64Safe}
