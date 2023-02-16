export function reverseWords(s: string): string {
  const arr = s.split(' ').filter(t => t !== ' ' && t !== '');
  arr.reverse();
  return arr.join(' ');
}
