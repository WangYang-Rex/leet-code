export function reverseWords(s: string): string {
  const arr = s.split(' ').filter(t => t !== ' ' && t !== '');
  const _arr = arr.map((str, i) => {
    return arr[i].split('').reverse().join('')
  })
  return _arr.join(' ');
}
