# 铺瓷砖

> 难度：困难
>
> https://leetcode.cn/problems/tiling-a-rectangle-with-the-fewest-squares/

## 题目

你是一位施工队的工长，根据设计师的要求准备为一套设计风格独特的房子进行室内装修。

房子的客厅大小为 `n x m`，为保持极简的风格，需要使用尽可能少的 正方形 瓷砖来铺盖地面。

假设正方形瓷砖的规格不限，边长都是整数。

请你帮设计师计算一下，最少需要用到多少块方形瓷砖？


### 示例 1：

![1](https://github.com/WangYang-Rex/leet-code/assets/7553998/af118912-423d-416c-9bc4-d8120406bd0b)

```
输入：n = 2, m = 3
输出：3
解释：3 块地砖就可以铺满卧室。
     2 块 1x1 地砖
     1 块 2x2 地砖
```

### 示例 2：

![2](https://github.com/WangYang-Rex/leet-code/assets/7553998/cfd2b75b-1a50-478e-ac7f-98e60c2677b6)

```
输入：n = 5, m = 8
输出：5
```
### 示例 3：

![3](https://github.com/WangYang-Rex/leet-code/assets/7553998/dddc766a-0545-46ad-90ea-87e442319660)

```
输入：n = 11, m = 13
输出：6
```

## 题解

### 递归回溯 + 状态压缩

```javascript
export function tilingRectangle(n: number, m: number): number {
  let ans = n * m;
  const filled: number[] = new Array(n).fill(0);
  const dfs = (i: number, j: number, t: number) => {
    if (j === m) {
      ++i;
      j = 0;
    }
    if (i === n) {
      ans = t;
      return;
    }
    if ((filled[i] >> j) & 1) {
      dfs(i, j + 1, t);
    } else if (t + 1 < ans) {
      let [r, c] = [0, 0];
      for (let k = i; k < n; ++k) {
        if ((filled[k] >> j) & 1) {
          break;
        }
        ++r;
      }
      for (let k = j; k < m; ++k) {
        if ((filled[i] >> k) & 1) {
          break;
        }
        ++c;
      }
      const mx = Math.min(r, c);
      for (let w = 1; w <= mx; ++w) {
        for (let k = 0; k < w; ++k) {
          filled[i + w - 1] |= 1 << (j + k);
          filled[i + k] |= 1 << (j + w - 1);
        }
        dfs(i, j + w, t + 1);
      }
      for (let x = i; x < i + mx; ++x) {
        for (let y = j; y < j + mx; ++y) {
          filled[x] ^= 1 << y;
        }
      }
    }
  };
  dfs(0, 0, 0);
  return ans;
}

```
