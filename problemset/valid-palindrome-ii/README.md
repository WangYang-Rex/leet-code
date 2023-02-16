# 验证回文串 II

> 难度：简单
>
> https://leetcode.cn/problems/valid-palindrome-ii/

## 题目

给你一个字符串 `s`，最多 可以从中删除一个字符。

请你判断 `s` 是否能成为回文字符串：如果能，返回 `true` ；否则，返回 `false` 。

 

### 示例 1：
```
输入：s = "aba"
输出：true
```

### 示例 2：

```
输入：s = "abca"
输出：true
解释：你可以删除字符 'c' 。
```

### 示例 3：

```
输入：s = "abc"
输出：false
```

## 解题

### 双指针
```typescript
/**
 * 双指针
 * @param s
 * @returns
 */
export function validPalindrome(s: string): boolean {
  const fn = (str: string): boolean => {
    let res = true;
    for (let i = 0; i < str.length; i++) { 
      if (str[i] !== str[str.length - 1 - i]) {
        res = false;
        break;
      }
    }
    return res;
  }
  // let res = false;
  let left = 0;
  let right = s.length - 1;
  let changeCount = 0;
  while (left < right && changeCount < 2) {
    if (s[left] === s[right]) {
      left++;
      right--
    } else {
      const leftStr = s.slice(left + 1, right + 1);
      const rightStr = s.slice(left, right);
      if (fn(leftStr) || fn(rightStr)) {
        changeCount++;
        left = right; // 中止
      } else {
        changeCount = 2;
      }
    }
  }
  return changeCount < 2
}
```
