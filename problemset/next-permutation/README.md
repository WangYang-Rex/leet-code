# 下一个排列

> 难度：中等
>
> https://leetcode-cn.com/problems/next-permutation/

## 题目

实现获取 **下一个排列** 的函数，算法需要将给定数字序列重新排列成字典序中下一个更
大的排列（即，组合出下一个更大的整数）。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须 **原地** 修改，只允许使用额外常数空间。

### 示例

#### 示例 1：

```
输入：nums = [1,2,3]
输出：[1,3,2]
```

#### 示例 2：

```
输入：nums = [3,2,1]
输出：[1,2,3]
```

#### 示例 3：

```
输入：nums = [1,1,5]
输出：[1,5,1]
```

#### 示例 4：

```
输入：nums = [1]
输出：[1]
```

## 解法

```typescript
/**
 * 两遍扫描
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param nums
 */
export function nextPermutation(nums: number[]): void {
  if (nums.length <= 1) return;
  // 从右往左，找到第一个左边小于右边的数a
  // 从右往左，找到第一个大于a的数b
  // 交换a和b的位置，然后b右边的数从小到大排列
  let i = -1; let j = -1;
  for (let k = nums.length - 1; k >= 1; k--) {
    if (nums[k - 1] < nums[k]) {
      i = k - 1;
      break;
    }
  }
  if (i >= 0) {
    for (let k = nums.length - 1; k > i; k--) {
      if (nums[k] > nums[i]) {
        j = k;
        break;
      }
    }
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    const arr = nums.splice(i + 1, 100);
    arr.sort((a, b) => a - b);
    arr.forEach((aa) => {
      nums.push(aa)
    })
  } else {
    nums.sort((a, b) => a - b)
  }
}

```
