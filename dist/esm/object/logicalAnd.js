export default function logicalAnd(object) {
  for (const key in object) {
    if (object[key] === false) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=logicalAnd.js.map