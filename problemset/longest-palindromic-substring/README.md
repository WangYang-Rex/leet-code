# 最长回文子串

> 难度：中等
>
> https://leetcode-cn.com/problems/longest-palindromic-substring/

## 题目

给你一个字符串 s，找到 s 中最长的回文子串。

### 示例

#### 示例 1：

```
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
```

#### 示例 2：

```
输入：s = "cbbd"
输出："bb"
```

#### 示例 3：

```
输入：s = "a"
输出："a"
```

#### 示例 4：

```
输入：s = "ac"
输出："a"
```

## 解法

### 暴力求解
```typescript
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
```

### 中心扩展

```typescript
/**
 * 中心扩展
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param s {string}
 * @return {string}
 */
export function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  // 初始化结果，默认为第一个字符
  let res: string = s[0];

  // 遍历，以i为中心点
  for (let i: number = 0; i < s.length; i++) {
    // 中心点为一个字符的情况
    if (i > 0 && s[i - 1] === s[i + 1]) {
      findPalindrome(i, i);
    }
    // 中心点为两个个字符的情况
    if (s[i] === s[i + 1]) {
      findPalindrome(i, i + 1);
    }
  }

  return res;

  /**
   * 查找回文子串
   * @param left {number}
   * @param right {number}
   */
  function findPalindrome(left: number, right: number): void {
    // 初始化中心点
    let palindrome = left === right ? s[left] : s[left] + s[right];
    // 向左右散开，一一比较
    while (s[--left] === s[++right] && left >= 0 && right < s.length) {
      palindrome = s[left] + palindrome + s[right];
    }
    // 返回最长值
    res = res.length < palindrome.length ? palindrome : res;
  }
}
```

### Manacher 算法

> [解析](./MANACHER.md)

```typescript
export function longestPalindrome2(s: string): string {
  if (s.length < 2) return s;

  // 将s转换为加了特殊字符#的字符数组，目的是统一奇偶数的回文中心差异性问题
  s = '#' + s.split('').join('#') + '#';

  let start: number = 0;
  let end: number = -1;
  let armLen: Array<number> = []; // 当前集合
  let right: number = -1;
  let j: number = -1; // 中心点

  for (let i: number = 0; i < s.length; i++) {
    let curArmLen: number; // 当前臂长
    if (right >= i) {
      let iSym = j * 2 - i;
      let minArmLen = Math.min(armLen[iSym], right - i);
      curArmLen = expand(i - minArmLen, i + minArmLen);
    } else {
      curArmLen = expand(i, i);
    }
    armLen.push(curArmLen);
    if (i + curArmLen > right) {
      j = i;
      right = i + curArmLen;
    }
    if (2 * curArmLen + 1 > end - start) {
      start = i - curArmLen;
      end = i + curArmLen;
    }
  }

  let ans: string = '';
  for (let i: number = start; i <= end; i++) {
    if (s[i] !== '#') {
      ans += s[i];
    }
  }

  return ans;

  function expand(left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return Math.floor((right - left - 2) / 2);
  }
}
```
