"use strict";
/**
 * Filter value by deep key in object(array)
 *
 * @example
 const scores = {
    John: 2,
    Sarah: 3,
    Janet: 1
  };

 filter(scores, ([name, score]) => score > 1);
 *
 * @param {object} object
 * @param {Function} predicate
 * @returns {object}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = filter;
function filter(object, predicate) {
    return Object.fromEntries(Object.entries(object).filter(predicate));
}
//# sourceMappingURL=filter.js.map