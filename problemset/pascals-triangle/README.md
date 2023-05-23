# 杨辉三角

> 难度：简单
>
> https://leetcode.cn/problems/pascals-triangle/

## 题目

给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

![1](https://github.com/WangYang-Rex/leet-code/assets/7553998/269efb94-d582-474a-bfcf-609ae203adfc)

示例 1:

输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
示例 2:

输入: numRows = 1
输出: [[1]]

## 题解

```javascript
export function generate(numRows: number): number[][] {
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

```