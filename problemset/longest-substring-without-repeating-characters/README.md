# 无重复字符的最长子串

> 难度：中等
>
> https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

## 题目

给定一个字符串`s`，请你找出其中不含有重复字符的**最长子串**的长度。

### 实例

#### 示例 1:

```
输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

#### 示例 2:

```
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

#### 示例 3:

```
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是"wke"，所以其长度为 3。
```

请注意，你的答案必须是**子串**的长度，"pwke"是一个子序列，不是子串。

#### 示例 4:

```
输入: s = ""
输出: 0
```

## 解法

### 暴力解法

```typescript
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

```

### 滑动窗口

```typescript
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

```
