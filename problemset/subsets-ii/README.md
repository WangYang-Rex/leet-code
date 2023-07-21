# 子集 II

> 难度：中等
>
> https://leetcode.cn/problems/subsets-ii/

## 题目

给你一个整数数组 `nums` ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

 

### 示例 1：
```
输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
```

### 示例 2：
```
输入：nums = [0]
输出：[[],[0]]
```

## 题解
```typescript
export function subsetsWithDup(nums: number[]): number[][] {
  const _nums: number[] = nums.sort();
  const n: number = nums.length;
  const set = new Set<string>();
  for (let i = 0; i < (1 << n); i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        arr.push(_nums[j]);
      }
    }
    set.add(arr.join(','))
  }

  const res: number[][] = [];
  set.forEach((item) => {
    if (item === '') {
      res.push([])
    } else {
      const it = item.split(',').map(i => Number(i));
      res.push(it)
    }
  })
  return res
}
```