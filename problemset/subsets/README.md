# 子集

> 难度：中等
>
> https://leetcode.cn/problems/subsets/

## 题目

给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 
### 示例 1：
```
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

### 示例 2：
```
输入：nums = [0]
输出：[[],[0]]
```

## 题解

```typescript
export function subsets(nums: number[]): number[][] {
  const n = nums.length;
  const res: number[][] = [];

  for (let i = 0; i < (1 << n); i++) {
    const t: number[] = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        t.push(nums[j]);
      }
    }
    res.push(t)
  }
  return res;
}

```
