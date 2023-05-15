# 按列翻转得到最大值等行数

> 难度：中等
>
> https://leetcode.cn/problems/flip-columns-for-maximum-number-of-equal-rows/

## 题目

给定 `m x n` 矩阵 `matrix` 。

你可以从中选出任意数量的列并翻转其上的 每个 单元格。（即翻转后，单元格的值从 `0` 变成 `1`，或者从 `1` 变为 `0` 。）

返回 经过一些翻转后，行与行之间所有值都相等的最大行数 。

 

### 示例 1：
```
输入：matrix = [[0,1],[1,1]]
输出：1
解释：不进行翻转，有 1 行所有值都相等。
```
### 示例 2：
```
输入：matrix = [[0,1],[1,0]]
输出：2
解释：翻转第一列的值之后，这两行都由相等的值组成。
```
### 示例 3：
```
输入：matrix = [[0,0,0],[0,0,1],[1,1,0]]
输出：2
解释：翻转前两列的值之后，后两行由相等的值组成。
```

## 题解

```javascript
export function maxEqualRowsAfterFlips(matrix: number[][]): number {
  // 找出本质相同的行
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] === 1 ? matrix[i][j] = 0 : matrix[i][j] = 1
      }
    }
  }
  const obj: any = {};
  for (let i = 0; i < matrix.length; i++) {
    const rowstr = matrix[i].join('');
    if (obj[rowstr]) {
      obj[rowstr] = obj[rowstr] + 1;
    } else {
      obj[rowstr] = 1
    }
  }
  let res = 0;
  Object.keys(obj).forEach((key) => {
    res = Math.max(res, obj[key])
  })
  return res
}

```