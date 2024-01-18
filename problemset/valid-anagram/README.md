# 有效的字母异位词

> 难度：简单
>
> https://leetcode.cn/problems/valid-anagram

## 题目

给定两个字符串 `s` 和 `t` ，编写一个函数来判断 `t` 是否是 `s` 的字母异位词。

注意：若 `s` 和 `t` 中每个字符出现的次数都相同，则称 `s` 和 `t` 互为字母异位词。
 

### 示例 1:
```javascript
输入: s = "anagram", t = "nagaram"
输出: true
```

### 示例 2:
```javascript
输入: s = "rat", t = "car"
输出: false
```

## 题解

### TS

```javascript
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }
  const mapS = new Map<string, number>();
  const mapT = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
    mapT.set(t[i], (mapT.get(t[i]) || 0) + 1);
  }

  if (mapS.size !== mapT.size) {
    return false;
  }

  let ans = true;

  for (const key of mapS.keys()) {
    if (mapS.get(key) !== mapT.get(key)) {
      ans = false;
      break;
    }
  }
  return ans
}

// copilot 生成
export function isAnagram1(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const mapS = new Map<string, number>();
  const mapT = new Map<string, number>();

  // Count the frequency of each character in string s
  for (const char of s) {
    mapS.set(char, (mapS.get(char) || 0) + 1);
  }
  for (const char of t) {
    mapT.set(char, (mapT.get(char) || 0) + 1);
  }

  // Count the frequency of each character in string t
  for (const [char, count] of mapS) {
    if (mapT.get(char) !== count) {
      return false;
    }
  }

  return true;
}

```

### Python

```python

```
