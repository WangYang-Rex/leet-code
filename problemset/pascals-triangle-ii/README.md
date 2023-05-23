# 杨辉三角 II

> 难度：简单
>
> https://leetcode.cn/problems/pascals-triangle-ii/

## 题目

给定一个非负索引 `rowIndex`，返回「杨辉三角」的第 `rowIndex` 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

![2](https://github.com/WangYang-Rex/leet-code/assets/7553998/08eb6c97-5896-4693-84a5-a2bcaa941813)

### 示例 1:
```
输入: rowIndex = 3
输出: [1,3,3,1]
```
### 示例 2:
```
输入: rowIndex = 0
输出: [1]
```
### 示例 3:
```
输入: rowIndex = 1
输出: [1,1]
```

## 题解

```javascript 
export function getRow(rowIndex: number): number[] {
  const generate = (numRows: number): number[][] => {
    const res: number[][] = [];
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          row[j] = 1;
        } else {
          row[j] = res[i - 1][j - 1] + res[i - 1][j];
        }
      }
      res.push(row);
    }
    return res;
  }
  const res = generate(rowIndex + 1);
  return res[rowIndex]
}

```
