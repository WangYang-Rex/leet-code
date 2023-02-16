export function isPalindrome(s: string): boolean {
  // 排除所有非字母数字字符
  const str = s.toLowerCase();
  const arr = str.split('').filter(a => (a >= 'a' && a <= 'z') || (a >= '0' && a <= '9'));
  let res = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      res = false;
    }
  }
  return res;
}
/**
 * 双指针
 * @param s
 * @returns
 */
export function isPalindrome1(s: string): boolean {
  // 排除所有非字母数字字符
  const str = s.toLowerCase();
  const arr = str.split('').filter(a => (a >= 'a' && a <= 'z') || (a >= '0' && a <= '9'));
  let res = true;
  let left = 0;
  let right = arr.length - 1;
  while (res && left < right) {
    if (arr[left] !== arr[right]) {
      res = false
    }
    left++;
    right--
  }
  return res;
}
