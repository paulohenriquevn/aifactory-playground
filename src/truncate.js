/** Cuts text to at most max characters, ending with an ellipsis when cut. */
export function truncate(text, max) {
  if (!Number.isInteger(max) || max < 1) {
    throw new RangeError('Expected max to be a positive integer')
  }

  if (text.length <= max) {
    return text
  }

  return text.slice(0, max - 1) + '…'
}
