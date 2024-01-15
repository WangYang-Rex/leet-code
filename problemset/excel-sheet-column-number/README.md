# Excel 表列序号

> 难度：简单
>
> https://leetcode.cn/problems/excel-sheet-column-number/description/

## 题目

给你一个字符串 `columnTitle` ，表示 `Excel` 表格中的列名称。返回 该列名称对应的列序号 。

例如：
```typescript
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
```

### 示例 1:

```typescript
输入: columnTitle = "A"
输出: 1

```

### 示例 2:

```typescript
输入: columnTitle = "AB"
输出: 28
```

### 示例 3:

```typescript
输入: columnTitle = "ZY"
输出: 701
```

## 题解

### typescript
```typescript
export function titleToNumber(columnTitle: string): number {
  let res = 0;
  const A = 'A'.charCodeAt(0) - 1;
  const n = columnTitle.length;
  for (let i = 0; i < n; i++) {
    const c = columnTitle.charCodeAt(n - 1 - i);
    // console.log(columnTitle[n - 1 - i], c)
    res = res + (c - A) * Math.pow(26, i)
  }
  return res;
}

// titleToNumber('ZY'); // AB ZY

```

### python3

```python
import math
class Solution:
  def titleToNumber(self, columnTitle: str) -> int:
    res = 0;
    _A = ord('A') - 1
    n = len(columnTitle)
    # print(n)
    for i in range(n):
      c = ord(columnTitle[n - i - 1])
      res = res + (c -_A) * math.pow(26, i)
    return int(res)
# s = Solution()
# print(s.titleToNumber('A'))
# print(s.titleToNumber('AB'))
# print(s.titleToNumber('ZY'))
```
