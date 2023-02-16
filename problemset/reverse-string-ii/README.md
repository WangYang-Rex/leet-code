# 反转字符串 II

> 难度：简单
>
> https://leetcode.cn/problems/reverse-string-ii/

## 题目

给定一个字符串 `s` 和一个整数 `k`，从字符串开头算起，每计数至 `2k` 个字符，就反转这 `2k` 字符中的前 `k` 个字符。

如果剩余字符少于 `k` 个，则将剩余字符全部反转。
如果剩余字符小于 `2k` 但大于或等于 `k` 个，则反转前 `k` 个字符，其余字符保持原样。
 

### 示例 1：
```
输入：s = "abcdefg", k = 2
输出："bacdfeg"
```

### 示例 2：
```
输入：s = "abcd", k = 2
输出："bacd"
```

## 解题

```typescript
export function reverseStr(s: string, k: number): string {
  let i = 0;
  let count = 0;
  let str = '';
  let res = '';
  while (i < s.length) {
    count++;
    if (count <= k) {
      str = s[i] + str;
      if (count === k) {
        res += str;
        str = '';
      }
    } else if (count <= k * 2) {
      res += s[i]
      if (count === k * 2) {
        count = 0;
      }
    }
    i++;
  }
  res += str
  return res
}
```