/**
 * 对撞指针
 * @param s
 * @returns
 */
export function reverseVowels(s: string): string {
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;
  const _arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  while (left < right) {
    const l = _arr.includes(arr[left]);
    const r = _arr.includes(arr[right]);
    if (l && r) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--
    } else if (l) {
      right--
    } else if (r) {
      left++;
    } else {
      left++;
      right--
    }
  }
  return arr.join('')
}
