/**
 * 对撞指针
 * @param s
 */
export function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    // const temp = s[left];
    // s[left] = s[right];
    // s[right] = temp;
    left++;
    right--
  }
}
