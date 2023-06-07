# 判断子序列

> 难度：简单
>
> https://leetcode.cn/problems/is-subsequence/

## 题目

给定字符串 `s` 和 `t` ，判断 `s` 是否为 `t` 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，`"ace"`是`"abcde"`的一个子序列，而`"aec"`不是）。

进阶：

如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

致谢：

特别感谢 @pbrother 添加此问题并且创建所有测试用例。


### 示例 1：
```
输入：s = "abc", t = "ahbgdc"
输出：true
```

### 示例 2：
```
输入：s = "axc", t = "ahbgdc"
输出：false
```

## 题解 

### 双指针

```javascript
export function isSubsequence1(s: string, t: string): boolean {
  const n = s.length; const m = t.length;
  let i = 0; let j = 0;
  while (i < n && j < m) {
    if (s.charAt(i) === t.charAt(j)) {
      i++;
    }
    j++;
  }
  return i === n;
}

```

### 双指针1

```javascript
export function isSubsequence(s: string, t: string): boolean {
  if (s === '') {
    return true
  }
  if (s.length === 1) {
    return t.includes(s)
  }
  // let ans = false;
  let _j = 0;
  let _i = 0;
  for (let i = 0; i < s.length; i++) {
    let pick = false;
    for (let j = _j; j < t.length; j++) {
      if (s[i] === t[j]) {
        pick = true;
        _j = j + 1;
        break;
      }
    }
    if (!pick) {
      break;
    }
    _i = i;
  }

  const ans = _i === s.length - 1;

  return ans
}

```