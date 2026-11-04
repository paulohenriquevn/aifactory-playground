/** Restricts n to the range [min, max]. Throws a RangeError if min > max. */
export function clamp(n, min, max) {
  if (min > max) {
    throw new RangeError(`min (${min}) must not be greater than max (${max})`)
  }
  return Math.min(Math.max(n, min), max)
}
