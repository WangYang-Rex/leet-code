# 子数组最大平均数 I

> 难度：简单
>
> https://leetcode.cn/problems/maximum-average-subarray-i/

## 题目

给你一个由 `n` 个元素组成的整数数组 `nums` 和一个整数 `k` 。

请你找出平均数最大且 长度为 `k` 的连续子数组，并输出该最大平均数。

任何误差小于 `10-5` 的答案都将被视为正确答案。

### 示例 1：
```
输入：nums = [1,12,-5,-6,50,3], k = 4
输出：12.75
解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
```

### 示例 2：
```
输入：nums = [5], k = 1
输出：5.00000
```

## 解题

### 滑动窗口
```typescript
/**
 * 滑动窗口
 * 执行用时：68 ms
 * 内存消耗：54.9 MB
 * @param nums
 * @param k
 * @returns
 */
export function findMaxAverage(nums: number[], k: number): number {
  // const avg = -1.23456;
  let kSum = 0; // nums.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = kSum;
  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      kSum += nums[i];
      maxSum = kSum;
    } else {
      kSum = kSum - nums[i - k] + nums[i];
      maxSum = Math.max(maxSum, kSum);
    }
  }

  return maxSum / k;
}

```