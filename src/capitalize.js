/** Upper-cases the first character of text; the rest is left as is. */
export function capitalize(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Expected text to be a string')
  }

  return text.charAt(0).toUpperCase() + text.slice(1)
}
