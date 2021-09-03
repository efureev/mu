export default function sum(object) {
  let result = 0
  for (const key in object) {
    result += object[key]
  }

  return result
}
