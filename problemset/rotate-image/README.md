# 旋转图像

> 难度：中等
>
> https://leetcode.cn/problems/rotate-image/

## 题目

给定一个 n × n 的二维矩阵 `matrix` 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 `原地` 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

 

### 示例 1：

![1](https://github.com/WangYang-Rex/leet-code/assets/7553998/986eebc9-abea-4c82-8b8f-175857f1bc45)
```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
```

### 示例 2：

![2](https://github.com/WangYang-Rex/leet-code/assets/7553998/d451e01c-1a30-47d2-8fef-ed30e70879a2)
```
输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```

## 解题

```javascript
/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): any {
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    const newArr = [];
    for (let j = len - 1; j >= 0; j--) {
      newArr.push(matrix[j][i]);
    }
    matrix.push(newArr)
  }
  matrix.splice(0, len);
  return matrix;
}

```
