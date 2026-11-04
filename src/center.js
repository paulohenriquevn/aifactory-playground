/**
 * Pads text with spaces on both sides to n characters; when the padding is
 * odd, the extra space goes to the right. Text already n or longer is returned unchanged.
 */
export function center(text, n) {
  const total = Math.max(0, n - text.length)
  const left = Math.floor(total / 2)
  return ' '.repeat(left) + text + ' '.repeat(total - left)
}
