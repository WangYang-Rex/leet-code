# 同构字符串

> 难度：简单
>
> https://leetcode.cn/problems/isomorphic-strings

## 题目

给定两个字符串 `s` 和 `t` ，判断它们是否是同构的。

如果 `s` 中的字符可以按某种映射关系替换得到 `t` ，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

### 示例 1:
```typescript
输入：s = "egg", t = "add"
输出：true
```

### 示例 2：
```typescript
输入：s = "foo", t = "bar"
输出：false
```

### 示例 3：
```typescript
输入：s = "paper", t = "title"
输出：true
```

## 题解

### typescript1
```typescript
export function isIsomorphic(s: string, t: string): boolean {
  const len = s.length;
  const mapS: any = {};
  const orderS = [];
  const mapT: any = {};
  const orderT = [];

  for (let i = 0; i < len; i++) {
    if (mapS[s[i]]) {
      mapS[s[i]].push(i);
    } else {
      mapS[s[i]] = [i]
      orderS.push(s[i])
    }

    if (mapT[t[i]]) {
      mapT[t[i]].push(i);
    } else {
      mapT[t[i]] = [i]
      orderT.push(t[i])
    }
  }

  let ans = true;
  if (orderS.length !== orderT.length) {
    ans = false
  } else {
    // let _s = ''; _t = '';
    for (let i = 0; i < orderS.length; i++) {
      // _s =
      if (mapS[orderS[i]].join(',') !== mapT[orderT[i]].join(',')) {
        ans = false;
        break;
      }
    }
  }

  return ans
}
```

### typescript2
```typescript
export function isIsomorphic1(s: string, t: string): boolean {
  function fn(s: string, t: string): boolean {
    let ans = true;
    for (let i = 0; i < s.length - 1; i++) {
      for (let j = i + 1; j < s.length; j++) {
        if (s[i] === s[j]) {
          if (t[i] !== t[j]) {
            ans = false
            break;
          }
        }
      }
      if (!ans) {
        break;
      }
    }
    return ans;
  }
  return fn(s, t) && fn(t, s);
}
```

### python
```python
class Solution:
  def isIsomorphic(self, s: str, t: str) -> bool:
    ans = 1
    if(len(s) != len(t)):
      return ans != 0
    lenS = len(s)
    arrS = range(lenS)
    for i in arrS[0:lenS-1]:
      for j in arrS[i+1: lenS]:
        if s[i]==s[j]:
          if t[i]!=t[j]:
            ans = 0
            break
        if t[i]==t[j]:
          if s[i]!=s[j]:
            ans = 0
            break
      if ans == 0:
        break
    return ans == 1

# s = Solution()
# print(s.isIsomorphic('egg','add'))
# print(s.isIsomorphic('foo','bar'))
# print(s.isIsomorphic('paper','title'))
```
