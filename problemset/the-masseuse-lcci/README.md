# 按摩师

> 难度：简单
>
> https://leetcode.cn/problems/the-masseuse-lcci/

## 题目

一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。

注意：本题相对原题稍作改动

 

### 示例 1：
```
输入： [1,2,3,1]
输出： 4
解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。
```

### 示例 2：
```
输入： [2,7,9,3,1]
输出： 12
解释： 选择 1 号预约、 3 号预约和 5 号预约，总时长 = 2 + 9 + 1 = 12。
```

### 示例 3：
```
输入： [2,1,4,5,3,1,1,3]
输出： 12
解释： 选择 1 号预约、 3 号预约、 5 号预约和 8 号预约，总时长 = 2 + 4 + 3 + 3 = 12。
```

## 题解

### 动态规划

```javascript
export function massage(nums: number[]): number {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  const dp = new Array(nums.length)

  for (let i = 0; i < nums.length; i++) {
    dp[i] = [0, 0];
    if (i === 0) {
      dp[i][0] = 0
      dp[i][1] = nums[i]
    } else {
      dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0])
      dp[i][1] = dp[i - 1][0] + nums[i]
    }
  }

  return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1]);
}
```
