# 通过删除字母匹配到字典里最长单词

> 难度：中等
>
> https://leetcode.cn/problems/longest-word-in-dictionary-through-deleting/

## 题目

给你一个字符串 `s` 和一个字符串数组 `dictionary` ，找出并返回 `dictionary` 中最长的字符串，该字符串可以通过删除 `s` 中的某些字符得到。

如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。

 
### 示例 1：
```
输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
输出："apple"
```

### 示例 2：
```
输入：s = "abpcplea", dictionary = ["a","b","c"]
输出："a"
```

## 解题

```typescript
export function findLongestWord(s: string, dictionary: string[]): string {
  let res = '';
  dictionary.map((d) => {
    let match = true;
    let _s = s;
    for (let i = 0; i < d.length; i++) {
      const _index = _s.indexOf(d[i]);
      if (_index < 0) {
        match = false;
        break;
      } else {
        _s = _s.slice(_index + 1);
      }
    }
    if (match && (d.length > res.length || (d.length === res.length && d < res))) {
      res = d;
    }
    return d
  })
  return res
}

```