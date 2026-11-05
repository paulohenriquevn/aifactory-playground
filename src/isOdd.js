/** Returns whether an integer is odd. */
export function isOdd(n) {
  if (!Number.isInteger(n)) {
    throw new TypeError('Expected an integer')
  }

  return n % 2 !== 0
}
