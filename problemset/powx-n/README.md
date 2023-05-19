# Pow(x, n)

> 难度：中等
>
> https://leetcode.cn/problems/powx-n/

## 题目

实现 `pow(x, n)` ，即计算 `x` 的整数 `n` 次幂函数（即，x^n ）。

 

### 示例 1：
```
输入：x = 2.00000, n = 10
输出：1024.00000
```

### 示例 2：
```
输入：x = 2.10000, n = 3
输出：9.26100
```

### 示例 3：
```
输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
```

## 题解

### 快速幂
```javascript
export function myPow1(x: number, n: number): number {
  if (n === 0) return 1;
  let fu = false;
  if (n < 0) {
    n = n * -1;
    fu = true;
  }
  // 快速幂
  let res = x;
  let i = 1;
  while (i < n) {
    if (i * 2 <= n) {
      res = res * res;
      i = i * 2
    } else {
      res = res * x;
      i = i + 1;
    }
  }
  if (fu) {
    res = 1 / res;
  }
  return Number(res.toFixed(5))
}
```

### 暴力解法 

```javascript
/**
 * 暴力
 */
export function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  let fu = false;
  if (n < 0) {
    n = n * -1;
    fu = true;
  }
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = res * x
  }
  if (fu) {
    res = 1 / res;
  }
  return Number(res.toFixed(5))
}
```
