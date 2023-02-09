/**
 * 暴力解法
 * @desc 时间复杂度 => O(N)  空间复杂度 => O(1)
 * @param x {number}
 * @return {boolean}
 */
export function isPalindrome(x: number): boolean {
  let isP = true;
  const str = x.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      isP = false;
    }
  }
  return isP
}

/**
 * 反转一半数字
 * @desc 时间复杂度 => O(log n)  空间复杂度 => O(1)
 * @param x {number}
 * @return {boolean}
 */
export function isPalindrome1(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false

  let revertedNumber = 0
  while (x > revertedNumber) {
    revertedNumber = (x % 10) + revertedNumber * 10
    x = Math.floor(x / 10)
  }

  return x === revertedNumber || x === Math.floor(revertedNumber / 10)
}
