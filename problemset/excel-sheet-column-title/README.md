# Excel表列名称

> 难度：简单
>
> https://leetcode.cn/problems/excel-sheet-column-title/

## 题目

你一个整数 `columnNumber` ，返回它在 Excel 表中相对应的列名称。

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

### 示例 1：
```typescript
输入：columnNumber = 1
输出："A"
```

### 示例 2：
```typescript
输入：columnNumber = 28
输出："AB"
```

### 示例 3：
```typescript
输入：columnNumber = 701
输出："ZY"
```

### 示例 4：
```typescript
输入：columnNumber = 2147483647
输出："FXSHRXW"
```

## 题解

### typescript

```typescript
export function convertToTitle(columnNumber: number): string {
  let ans = '';
  const A = 'A'.charCodeAt(0) - 1;
  while (columnNumber > 0) {
    let B = parseInt((columnNumber / 26).toString());
    let C = columnNumber % 26;
    if (C === 0) {
      C = 26;
      B = B - 1
    }
    ans = String.fromCharCode(A + C) + ans;
    columnNumber = B;
  }
  // console.log(ans)
  return ans;
}

// convertToTitle(1)
// convertToTitle(26)
// convertToTitle(27)
// convertToTitle(701)

```

### python3

```python
class Solution:
  def convertToTitle(self, columnNumber: int) -> str:
    ans = '';
    A = ord('A') - 1
    while(columnNumber > 0) :
      B = int(columnNumber/26);
      C = columnNumber % 26
      if(C == 0): 
        C = 26;
        B = B -1
      ans = chr(A + C) + ans;
      columnNumber = B
    print(ans)
    return ans;

# s = Solution();
# s.convertToTitle(1);
# s.convertToTitle(26);
# s.convertToTitle(27);
# s.convertToTitle(701);
```
