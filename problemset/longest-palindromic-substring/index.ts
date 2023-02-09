/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param s {string}
 * @return {string}
 */
export function longestPalindrome(s: string): string {
  // 遍历数组，找到2个一样字符，判断中间是否构成回文
  //
  function check(str: string): boolean {
    let res = true
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - 1 - i])
        res = false
    }
    return res
  }
  let _res = ''
  for (let i = 0; i < s.length; i++) {
    // 从后向前找一样的字符，然后判断中间是否是回文
    for (let j = s.length - 1; j > i; j--) {
      if (s[i] === s[j]) {
        const str = s.slice(i, j + 1)
        // 判断是否回文
        if (check(str)) {
          if (_res.length < str.length)
            _res = str

          break
        }
      }
    }
  }
  if (!_res && s.length > 0)
    _res = s[0]

  return _res
}
/**
 * 中心扩展
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param s {string}
 * @return {string}
 */
export function longestPalindrome2(s: string): string {
  if (s.length < 2) return s

  // 初始化结果，默认为第一个字符
  let res: string = s[0]

  // 遍历，以i为中心点
  for (let i = 0; i < s.length; i++) {
    // 中心点为一个字符的情况
    if (i > 0 && s[i - 1] === s[i + 1])
      findPalindrome(i, i)

    // 中心点为两个个字符的情况
    if (s[i] === s[i + 1])
      findPalindrome(i, i + 1)
  }

  return res

  /**
   * 查找回文子串
   * @param left {number}
   * @param right {number}
   */
  function findPalindrome(left: number, right: number): void {
    // 初始化中心点
    let palindrome = left === right ? s[left] : s[left] + s[right]
    // 向左右散开，一一比较
    while (s[--left] === s[++right] && left >= 0 && right < s.length)
      palindrome = s[left] + palindrome + s[right]

    // 返回最长值
    res = res.length < palindrome.length ? palindrome : res
  }
}
/**
 * 中心扩展
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param s {string}
 * @return {string}
 */
export function longestPalindrome3(s: string): string {
  if (s.length < 2) return s

  // 初始化结果，默认为第一个字符
  let res: string = s[0]

  // 遍历，以i为中心点
  for (let i = 0; i < s.length; i++) {
    // 中心点为一个字符的情况
    if (i > 0 && s[i - 1] === s[i + 1])
      findPalindrome(i, i)

    // 中心点为两个个字符的情况
    if (s[i] === s[i + 1])
      findPalindrome(i, i + 1)
  }

  return res

  /**
   * 查找回文子串
   * @param left {number}
   * @param right {number}
   */
  function findPalindrome(left: number, right: number): void {
    // 初始化中心点
    let palindrome = left === right ? s[left] : s[left] + s[right]
    // 向左右散开，一一比较
    while (s[--left] === s[++right] && left >= 0 && right < s.length)
      palindrome = s[left] + palindrome + s[right]

    // 返回最长值
    res = res.length < palindrome.length ? palindrome : res
  }
}
