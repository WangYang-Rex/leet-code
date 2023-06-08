# 青蛙跳台阶问题

> 难度：简单
>
> https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/

## 题目

一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 `n` 级的台阶总共有多少种跳法。

答案需要取模 `1e9+7（1000000007）`，如计算初始结果为：`1000000008`，请返回 `1`。

### 示例 1：
```
输入：n = 2
输出：2
```

### 示例 2：
```
输入：n = 7
输出：21
```

### 示例 3：
```
输入：n = 0
输出：1
```

## 题解

```javascript
export function numWays(n: number): number {
  const DP = new Array(n + 1).fill(0);
  DP[0] = 1;
  DP[1] = 1;

  for (let i = 2; i <= n; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2]) % 1000000007;
  }
  return DP[n]
}

```
