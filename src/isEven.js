/** Returns true when n is an even integer; false for odd integers and for anything that is not an integer. */
export function isEven(n) {
  return Number.isInteger(n) && n % 2 === 0
}
