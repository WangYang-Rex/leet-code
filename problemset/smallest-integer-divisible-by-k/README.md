# 可被 K 整除的最小整数

> 难度：中等
>
> https://leetcode.cn/problems/smallest-integer-divisible-by-k/

## 题目

给定正整数 `k` ，你需要找出可以被 `k` 整除的、仅包含数字 `1` 的最 小 正整数 `n` 的长度。

返回 `n` 的长度。如果不存在这样的 `n` ，就返回-1。

注意： `n` 不符合 `64` 位带符号整数。

 

### 示例 1：
```
输入：k = 1
输出：1
解释：最小的答案是 n = 1，其长度为 1。
```

### 示例 2：
```
输入：k = 2
输出：-1
解释：不存在可被 2 整除的正整数 n 。
```

### 示例 3：
```
输入：k = 3
输出：3
解释：最小的答案是 n = 111，其长度为 3。
```

## 题解

### 遍历

```javascript
export function smallestRepunitDivByK(k: number): number {
  // 初始化循环所需的余数 resid 为 1%k, 数位长度 len 为 1
  let resid = 1 % k; let len = 1;
  // 使用 Set 数据结构存储出现过的余数
  const set = new Set();
  set.add(resid);
  // 当余数不为 0 时，继续循环
  while (resid !== 0) {
    // 计算下一个余数
    resid = (resid * 10 + 1) % k;
    // 数位长度加 1
    len++;
    // 若该余数已经出现过，则说明出现了循环，直接返回 -1
    if (set.has(resid)) {
      return -1;
    }
    // 将新的余数加入 Set 中
    set.add(resid);
  }
  // 当余数为 0 时，表示找到了一个长度最短的可被整除的数字，返回长度 len
  return len;
}
```
