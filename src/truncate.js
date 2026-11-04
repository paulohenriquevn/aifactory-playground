/** Shortens text to at most `max` characters, ending with an ellipsis when cut. */
export function truncate(text, max) {
  if (!(max >= 1)) {
    throw new RangeError('max must be at least 1')
  }
  if (text.length <= max) return text
  return text.slice(0, max - 1) + '…'
}
