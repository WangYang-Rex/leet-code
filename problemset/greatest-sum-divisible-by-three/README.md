# 可被三整除的最大和

> 难度：中等
>
> https://leetcode.cn/problems/greatest-sum-divisible-by-three/

## 题目

给你一个整数数组 `nums`，请你找出并返回能被三整除的元素最大和。

 

### 示例 1：
```
输入：nums = [3,6,5,1,8]
输出：18
解释：选出数字 3, 6, 1 和 8，它们的和是 18（可被 3 整除的最大和）。
```

### 示例 2：
```
输入：nums = [4]
输出：0
解释：4 不能被 3 整除，所以无法选出数字，返回 0。
```

### 示例 3：
```
输入：nums = [1,2,3,4,4]
输出：12
解释：选出数字 1, 3, 4 以及 4，它们的和是 12（可被 3 整除的最大和）。
```

## 题解

```typescript
export function maxSumDivThree(nums: number[]): number {
  let f = [0, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  for (const num of nums) {
    const g = [...f];
    for (let i = 0; i < 3; ++i) {
      g[(i + num % 3) % 3] = Math.max(g[(i + num % 3) % 3], f[i] + num);
    }
    f = g;
  }
  return f[0];
}

```
