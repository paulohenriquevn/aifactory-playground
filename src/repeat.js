/** Returns `text` repeated `n` times. Throws a RangeError when `n` is negative. */
export function repeat(text, n) {
  if (n < 0) {
    throw new RangeError(`n must not be negative, got ${n}`)
  }
  return text.repeat(n)
}

export default repeat
