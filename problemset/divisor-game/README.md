# 除数博弈

> 难度：简单
>
> https://leetcode.cn/problems/divisor-game/

## 题目

爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

最初，黑板上有一个数字 `n` 。在每个玩家的回合，玩家需要执行以下操作：

- 选出任一 `x`，满足 `0 < x < n` 且 `n % x == 0` 。
- 用 `n - x` 替换黑板上的数字 `n` 。

如果玩家无法执行这些操作，就会输掉游戏。

只有在爱丽丝在游戏中取得胜利时才返回 `true` 。假设两个玩家都以最佳状态参与游戏。

 

### 示例 1：
```
输入：n = 2
输出：true
解释：爱丽丝选择 1，鲍勃无法进行操作。
```

### 示例 2：
```
输入：n = 3
输出：false
解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。
```

## 题解

### 动态规划
```javascript
  const DP = new Array(n + 1).fill(false);
  DP[1] = false; // 必败
  DP[2] = true // 必胜
  DP[3] = false // 必胜
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j === 0 && DP[i - j] === false) {
        DP[i] = true
        break
      }
    }
  }
  return DP[n]
```

### 数学
```javascript
export function divisorGame(n: number): boolean {
  return n % 2 === 0
}

```
