export default function isEven(value) {
  if (Number.isNaN(parseFloat(value)) || !Number.isFinite(Number(value))) {
    return false;
  }

  return value % 2 === 0;
}
/**
 * This function evaluates whether all parameters are evens
 */

export function isEvens(...parameters) {
  for (const parameter of parameters) {
    if (!isEven(parameter)) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=isEven.js.map