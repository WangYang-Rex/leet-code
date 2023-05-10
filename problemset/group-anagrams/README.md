# 字母异位词分组

> 难度：中等
>
> https://leetcode.cn/problems/group-anagrams/

## 题目

给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

 

### 示例 1:
```
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

### 示例 2:
```
输入: strs = [""]
输出: [[""]]
```

### 示例 3:
```
输入: strs = ["a"]
输出: [["a"]]
```

## 题解

```javascript
export function groupAnagrams(strs: string[]): string[][] {
  const obj: Record<string, string[]> = {};
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort().join('');
    if (obj[key]) {
      obj[key].push(strs[i])
    } else {
      obj[key] = [strs[i]]
    }
  }
  const arr: string[][] = [];
  Object.keys(obj).forEach((key) => {
    arr.push(obj[key])
  })
  return arr
}

```
