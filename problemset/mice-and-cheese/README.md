# 老鼠和奶酪

> 难度：中等
>
> https://leetcode.cn/problems/mice-and-cheese/

## 题目

有两只老鼠和 `n` 块不同类型的奶酪，每块奶酪都只能被其中一只老鼠吃掉。

下标为 `i` 处的奶酪被吃掉的得分为：

- 如果第一只老鼠吃掉，则得分为 `reward1[i]` 。
- 如果第二只老鼠吃掉，则得分为 `reward2[i]` 。

给你一个正整数数组 `reward1` ，一个正整数数组 `reward2` ，和一个非负整数 `k` 。

请你返回第一只老鼠恰好吃掉 `k` 块奶酪的情况下，最大 得分为多少。
 

### 示例 1：
```
输入：reward1 = [1,1,3,4], reward2 = [4,4,1,1], k = 2
输出：15
解释：这个例子中，第一只老鼠吃掉第 2 和 3 块奶酪（下标从 0 开始），第二只老鼠吃掉第 0 和 1 块奶酪。
总得分为 4 + 4 + 3 + 4 = 15 。
15 是最高得分。
```

### 示例 2：
```
输入：reward1 = [1,1], reward2 = [1,1], k = 2
输出：2
解释：这个例子中，第一只老鼠吃掉第 0 和 1 块奶酪（下标从 0 开始），第二只老鼠不吃任何奶酪。
总得分为 1 + 1 = 2 。
2 是最高得分。
```

## 题解

```javascript
export function miceAndCheese(reward1: number[], reward2: number[], k: number): number {
  // 找出每个位置如果被1被2吃掉的差值 排序
  let arr = [];
  for (let i = 0; i < reward1.length; i++) {
    arr.push({
      index: i,
      difference: reward2[i] - reward1[i],
    })
  }

  arr = arr.sort((a, b) => {
    return b.difference - a.difference;
  })

  let ans = reward1.reduce((res, cur) => {
    return res + cur
  }, 0)

  let i = 0;
  while (i < reward1.length - k) {
    ans = ans + arr[i].difference
    i++
  }

  return ans
}

```
