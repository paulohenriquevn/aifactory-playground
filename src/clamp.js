/**
 * Restricts n to the range [min, max].
 *
 * Decision (issue #37, answered by the maintainer paulohenriquevn): when
 * min > max, throw a RangeError rather than swapping or picking a bound.
 * NaN bounds are also rejected with a RangeError, since they define no range.
 * A NaN n is returned as NaN. Infinite bounds are allowed.
 */
export function clamp(n, min, max) {
  if (!(min <= max)) {
    throw new RangeError(`min (${min}) must not be greater than max (${max})`)
  }
  return Math.min(Math.max(n, min), max)
}
