# 有效时间的数目

> 难度：简单
>
> https://leetcode.cn/problems/number-of-valid-clock-times/

## 题目

给你一个长度为 `5` 的字符串 `time` ，表示一个电子时钟当前的时间，格式为 `"hh:mm"` 。最早 可能的时间是 `"00:00"` ，最晚 可能的时间是 `"23:59"` 。

在字符串 `time` 中，被字符 `?` 替换掉的数位是 未知的 ，被替换的数字可能是 `0` 到 `9` 中的任何一个。

请你返回一个整数 `answer` ，将每一个 `?` 都用 `0` 到 `9` 中一个数字替换后，可以得到的有效时间的数目。

 

### 示例 1：
```
输入：time = "?5:00"
输出：2
解释：我们可以将 ? 替换成 0 或 1 ，得到 "05:00" 或者 "15:00" 。注意我们不能替换成 2 ，因为时间 "25:00" 是无效时间。所以我们有两个选择。
```

### 示例 2：
```
输入：time = "0?:0?"
输出：100
解释：两个 ? 都可以被 0 到 9 之间的任意数字替换，所以我们总共有 100 种选择。
```

### 示例 3：
```
输入：time = "??:??"
输出：1440
解释：小时总共有 24 种选择，分钟总共有 60 种选择。所以总共有 24 * 60 = 1440 种选择。
```

## 题解

```javascript
export function countTime(time: string): number {
  // 替换后转换为数字 与 2359 比较
  // 0-2 3
  // 0-4 5
  // 0-5 6
  // 0-9 10
  const timeArr = time.split('');
  let h = 1;
  let m = 1;
  // 比较 01
  if (timeArr[0] === '?' && timeArr[1] === '?') {
    h = 24;
  } else if (timeArr[0] === '?') {
    const a = parseInt(timeArr[1], 10);
    if (a > 3) {
      h = 2;
    } else {
      h = 3
    }
  } else if (timeArr[1] === '?') {
    const a = parseInt(timeArr[0], 10);
    if (a === 2) {
      h = 4;
    } else {
      h = 10;
    }
  }
  // 比较 34
  if (timeArr[3] === '?' && timeArr[4] === '?') {
    m = 60;
  } else if (timeArr[3] === '?') {
    m = 6;
  } else if (timeArr[4] === '?') {
    m = 10;
  }

  return h * m;
}

```
