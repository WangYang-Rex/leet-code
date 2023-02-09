# Z 字形变换

> 难度：中等
>
> https://leetcode-cn.com/problems/zigzag-conversion/

## 题目

将一个给定字符串 1 根据给定的行数 `numRows` ，以从上往下、从左到右进行`Z`字形排
列。

比如输入字符串为 `"PAYPALISHIRING"` 行数为 `3` 时，排列如下：

```
P   A   H   N
A P L S I I G
Y   I   R
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如
：`"PAHNAPLSIIGYIR"`。

请你实现这个将字符串进行指定行数变换的函数：

`string convert(string s, int numRows);`

### 示例

#### 示例 1：

```
输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
```

#### 示例 2：

```
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
```

#### 示例 3：

```
输入：s = "A", numRows = 1
输出："A"
```

## 解法

### 按行排序

```typescript
export function convert(s: string, numRows: number): string {
  // 构建二维数组
  const arrs: string[][] = [];
  for (let i = 0; i < numRows; i++) {
    arrs.push([])
  }
  let currentRow = 0;
  let currentCol = 0;
  let fangxiang = 'down'
  if (numRows === 1) {
    return s;
  }
  for (let i = 0; i < s.length; i++) {
    arrs[currentRow][currentCol] = s[i];
    // 判断下一个位置
    if (fangxiang === 'down') {
      // 判断是否是最后一行
      if (currentRow === numRows - 1) {
        fangxiang = 'up'
        currentRow = currentRow - 1;
        currentCol = currentCol + 1;
      } else {
        currentRow = currentRow + 1;
      }
    } else {
      // 判断是否第一行
      if (currentRow === 0) {
        fangxiang = 'down';
        currentRow = currentRow + 1;
      } else {
        currentRow = currentRow - 1;
        currentCol = currentCol + 1;
      }
    }
  }
  let res = '';
  for (let i = 0; i < arrs.length; i++) {
    res += arrs[i].join('')
  }
  return res;
}

```
