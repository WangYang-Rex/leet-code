# 最接近的三数之和

> 难度：中等
>
> https://leetcode-cn.com/problems/3sum-closest/

## 题目

给定一个包括`n`个整数的数组`nums`和 一个目标值`target`。找出`nums`中的三个整数，
使得它们的和与`target`最接近。返回这三个数的和。假定每组输入只存在唯一答案。

### 示例：

```
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
```

## 解法

### 双指针

```typescript
/**
 * 排序+双指针
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(logN)
 * @param nums
 * @param target
 */
export function threeSumClosest(nums: number[], target: number): number {
  if (nums.length <= 3) {
    return nums.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
  }

  let ans: number = NaN;
  const len: number = nums.length;
  // 排序
  nums.sort((a, b) => a - b);

  for (let i: number = 0; i < len; i++) {
    let left: number = i + 1;
    let right: number = len - 1;

    while (left < right) {
      const sum: number = nums[i] + nums[right] + nums[left];

      if (sum === target) return sum;

      if (isNaN(ans) || Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum;
      }

      if (sum > target) right--;
      if (sum < target) left++;
    }
  }

  return ans;
}
```

### 双指针
```typescript
export function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b);
  let x = null;
  let sum: any;
  let a, b, c;
  for (let i = 0; i < nums.length; i++) {
    a = nums[i];
    // 寻找下一个数
    for (let j = i + 1; j < nums.length; j++) {
      b = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        c = nums[k];
        // 计和
        const _sum = a + b + c;
        // 计差
        const _x = _sum > target ? _sum - target : target - _sum;
        // 如果不存在过，直接赋值
        if (x === null || _x < x) {
          x = _x;
          sum = _sum
        }
      }
    }
  }
  return sum
}

```