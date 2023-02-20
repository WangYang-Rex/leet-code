# 排列硬币

> 难度：简单
>
> https://leetcode.cn/problems/arranging-coins/

## 题目

你总共有 `n` 枚硬币，并计划将它们按阶梯状排列。对于一个由 `k` 行组成的阶梯，其第 `i` 行必须正好有 `i` 枚硬币。阶梯的最后一行 可能 是不完整的。

给你一个数字 n` ，计算并返回可形成 完整阶梯行 的总行数。
 

### 示例 1：

![arrangecoins1-grid](https://user-images.githubusercontent.com/7553998/220069616-54f377b0-194a-4202-a436-d4af4bda0d9e.jpeg)

```
输入：n = 5
输出：2
解释：因为第三行不完整，所以返回 2 。
```

### 示例 2：

![arrangecoins2-grid](https://user-images.githubusercontent.com/7553998/220069717-f5959421-5771-46b8-a2ae-bd561dce4851.jpeg)

```
输入：n = 8
输出：3
解释：因为第四行不完整，所以返回 3 。
```

## 解题

```typescript
export function arrangeCoins(n: number): number {
  let res = 1;
  let all = 0;
  for (let i = 1; i <= n; i++) {
    all = all + i;
    if (all === n) {
      res = i
      break;
    } else if (all > n) {
      res = i - 1;
      break;
    }
  }
  return res
}

```