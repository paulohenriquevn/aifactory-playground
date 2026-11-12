/** Returns whether an integer is even. */
export function isEven(n) {
  if (!Number.isInteger(n)) {
    throw new TypeError('Expected an integer')
  }

  return n % 2 === 0
}
