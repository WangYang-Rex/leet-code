# 猜数字大小

> 难度：简单
>
> https://leetcode.cn/problems/guess-number-higher-or-lower/

## 题目

猜数字游戏的规则如下：

- 每轮游戏，我都会从 `1` 到 `n` 随机选择一个数字。 请你猜选出的是哪个数字。
- 如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。

你可以通过调用一个预先定义好的接口 `int guess(int num)` 来获取猜测结果，返回值一共有 `3` 种可能的情况（`-1`，`1` 或 `0`）：

- -1：我选出的数字比你猜的数字小 `pick < num`
- 1：我选出的数字比你猜的数字大 `pick > num`
- 0：我选出的数字和你猜的数字一样。恭喜！你猜对了！`pick == num`

返回我选出的数字。
 

### 示例 1：
```
输入：n = 10, pick = 6
输出：6
```

### 示例 2：
```
输入：n = 1, pick = 1
输出：1
```

### 示例 3：
```
输入：n = 2, pick = 1
输出：1
```

### 示例 4：
```
输入：n = 2, pick = 2
输出：2
```

## 题解

### 二分查找

```javascript
export function guessNumber(n: number, num: number): number {
  const guess = (_num: number) => {
    if (num > _num) {
      return 1
    }
    if (num < _num) {
      return -1
    }
    return 0
  }

  let l = 1;
  let r = n;
  let ans = 1;
  let res = guess(ans);
  // 每次都需要重置边界
  while (res !== 0) {
    // 猜小了
    if (res === 1) {
      l = ans + 1
    }
    // 猜大了
    if (res === -1) {
      r = ans - 1
    }
    ans = r - l === 1 ? l : Math.floor((l + r) / 2)
    res = guess(ans);
  }
  return ans;
}
```
