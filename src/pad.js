/** Left-pads text with spaces to n characters; returns text unchanged when it is already n long or longer. */
export function pad(text, n) {
  return text.padStart(n, ' ')
}
