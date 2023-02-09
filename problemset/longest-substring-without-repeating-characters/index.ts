/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(N)
 * @param s {string} 字符串
 * @return {number}
 */
export function lengthOfLongestSubstring(s: string): number {
  let a = ''
  let maxLength = 0
  for (let i = 0; i < s.length; i++) {
    const _i = a.indexOf(s[i])
    // 如果 a 里面没有相同的，则在a后面加上
    if (_i < 0) {
      a = a + s[i]
    }
    else {
      // 否则 截取字符串
      a = a.slice(_i + 1) + s[i]
    }
    if (a.length > maxLength)
      maxLength = a.length
  }
  return maxLength
}

/**
 * 滑动窗口
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s {string} 字符串
 * @return {number}
 */
export function lengthOfLongestSubstring2(s: string): number {
  if (s.length < 2) return s.length

  const set: Set<string> = new Set()
  let count = 0
  let leftPointer = 0 // 左游标
  let rightPointer = 0 // 右游标

  while (leftPointer < s.length) {
    // 当没有重复字符串时，移动右右边，并将字符串加入set
    while (rightPointer < s.length && !set.has(s[rightPointer])) {
      set.add(s[rightPointer])
      rightPointer++
    }

    // 更新count
    count = Math.max(count, rightPointer - leftPointer)
    // 移动左游标
    set.delete(s[leftPointer])
    leftPointer++
  }
  return count
}
