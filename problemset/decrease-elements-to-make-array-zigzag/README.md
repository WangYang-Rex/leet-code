# 递减元素使数组呈锯齿状

> 难度：中等
>
> https://leetcode.cn/problems/decrease-elements-to-make-array-zigzag/

## 题目

给你一个整数数组 `nums`，每次 操作 会从中选择一个元素并 将该元素的值减少 `1`。

如果符合下列情况之一，则数组 `A` 就是 锯齿数组：

每个偶数索引对应的元素都大于相邻的元素，即 `A[0] > A[1] < A[2] > A[3] < A[4] > ...`
或者，每个奇数索引对应的元素都大于相邻的元素，即 `A[0] < A[1] > A[2] < A[3] > A[4] < ...`
返回将数组 `nums` 转换为锯齿数组所需的最小操作次数。

 

### 示例 1：

```
输入：nums = [1,2,3]
输出：2
解释：我们可以把 2 递减到 0，或把 3 递减到 1。
```

### 示例 2：
```
输入：nums = [9,6,1,6,2]
输出：4
```

## 解题

```typescript
export function movesToMakeZigzag(nums: number[]): number {
  let res1 = 0;
  let res2 = 0;
  for (let i = 0; i < nums.length; i++) {
    const left = nums[i - 1] || nums[i] + 1;
    const right = nums[i + 1] || nums[i] + 1;
    const min = Math.min(left, right);
    if (nums[i] >= min) {
      if (i % 2 === 0) {
        res1 += nums[i] - min + 1;
      } else {
        res2 += nums[i] - min + 1;
      }
    }
  }
  return Math.min(res1, res2);
}
```
