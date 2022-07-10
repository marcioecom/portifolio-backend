const letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function randomUrl(letter = ''): string {
  if (letter.length === 10) {
    return letter;
  } else {
    const item = letters.charAt(Math.floor(Math.random() * letters.length));
    return randomUrl(letter + item);
  }
}
