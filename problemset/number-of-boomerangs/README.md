# 回旋镖的数量

> 难度：中等
>
> https://leetcode.cn/problems/number-of-boomerangs/

## 题目

给定平面上 `n` 对 互不相同 的点 `points` ，其中 `points[i] = [xi, yi]` 。回旋镖 是由点 `(i, j, k) `表示的元组 ，其中 `i` 和 `j` 之间的距离和 `i` 和 `k` 之间的欧式距离相等（需要考虑元组的顺序）。

返回平面上所有回旋镖的数量。

 
### 示例 1：
```
输入：points = [[0,0],[1,0],[2,0]]
输出：2
解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
```

### 示例 2：
```
输入：points = [[1,1],[2,2],[3,3]]
输出：2
```

### 示例 3：
```
输入：points = [[1,1]]
输出：0
```

## 解题

```typescript
export function numberOfBoomerangs(points: number[][]): number {
  const fn = (pointA: number[], pointB: number[]) => {
    const _res = (pointA[0] - pointB[0]) * (pointA[0] - pointB[0]) + (pointA[1] - pointB[1]) * (pointA[1] - pointB[1])
    return _res
  }

  let count = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      for (let k = 0; k < points.length; k++) {
        if (i !== j && j !== k && i !== k) {
          if (fn(points[i], points[j]) === fn(points[i], points[k])) {
            count++;
          }
        }
      }
    }
  }
  return count
}

```