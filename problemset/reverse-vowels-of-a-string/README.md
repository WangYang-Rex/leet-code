# 反转字符串中的元音字母

> 难度：简单
>
> https://leetcode.cn/problems/reverse-vowels-of-a-string/

## 题目

给你一个字符串 `s` ，仅反转字符串中的所有元音字母，并返回结果字符串。

元音字母包括 `'a'`、`'e'`、`'i'`、`'o'`、`'u'`，且可能以大小写两种形式出现不止一次。

### 示例 1：
```
输入：s = "hello"
输出："holle"
```

### 示例 2：
```
输入：s = "leetcode"
输出："leotcede"
```

## 解题

### 对撞指针
```typescript
/**
 * 对撞指针
 * @param s
 * @returns
 */
export function reverseVowels(s: string): string {
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;
  const _arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  while (left < right) {
    const l = _arr.includes(arr[left]);
    const r = _arr.includes(arr[right]);
    if (l && r) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--
    } else if (l) {
      right--
    } else if (r) {
      left++;
    } else {
      left++;
      right--
    }
  }
  return arr.join('')
}
```