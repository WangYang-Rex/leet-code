# 单字符重复子串的最大长度

> 难度：中等
>
> https://leetcode.cn/problems/swap-for-longest-repeated-character-substring/

## 题目

如果字符串中的所有字符都相同，那么这个字符串是单字符重复的字符串。

给你一个字符串 text，你只能交换其中两个字符一次或者什么都不做，然后得到一些单字符重复的子串。返回其中最长的子串的长度。

 

### 示例 1：
```
输入：text = "ababa"
输出：3
```

### 示例 2：
```
输入：text = "aaabaaa"
输出：6
```

### 示例 3：
```
输入：text = "aaabbaaa"
输出：4
```

### 示例 4：
```
输入：text = "aaaaa"
输出：5
```

### 示例 5：
```
输入：text = "abcdef"
输出：1
```

## 题解

```javascript
export function maxRepOpt1(text: string): number {
  let ans = 0;
  let i = 0;
  while (i < text.length) {
    const _obj = {
      start: i,
      end: i,
      _text: text[i],
      length: 0,
    }
    for (let j = i; j < text.length; j++) {
      if (text[j] === text[i]) {
        _obj.end = j;
      } else {
        break;
      }
    }
    let count = 0;
    const afterText = text.slice(_obj.end + 1);
    const beforeText = text.slice(0, _obj.start);
    let restTest = '';
    // 往前找
    if (beforeText.length > 0) {
      if (afterText.includes(_obj._text)) {
        restTest = beforeText.slice(0, beforeText.length - 1) + _obj._text;
      } else if (beforeText.includes(_obj._text)) {
        const _index = beforeText.indexOf(_obj._text);
        restTest = beforeText.slice(0, _index) + beforeText[beforeText.length - 1] + beforeText.slice(_index + 1, beforeText.length - 1) + _obj._text;
      }
      for (let j = restTest.length - 1; j >= 0; j--) {
        if (restTest[j] === _obj._text) {
          count++;
        } else {
          break;
        }
      }
    }
    // 往后找
    if (afterText.length > 0) {
      if (beforeText.includes(_obj._text)) {
        restTest = _obj._text + afterText.slice(1);
      } else if (afterText.includes(_obj._text)) {
        const _index = afterText.lastIndexOf(_obj._text);
        restTest = _obj._text + afterText.slice(1, _index) + afterText[0] + afterText.slice(_index + 1);
      }
      let _count = 0;
      for (let j = 0; j < restTest.length; j++) {
        if (restTest[j] === _obj._text) {
          _count++;
        } else {
          break;
        }
      }
      count = Math.max(count, _count);
    }
    _obj.length = _obj.end - _obj.start + 1 + count;
    ans = Math.max(ans, _obj.length);
    i = _obj.end + 1;
  }
  return ans
}

```
