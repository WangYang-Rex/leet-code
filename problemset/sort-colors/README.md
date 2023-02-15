# 颜色分类

> 难度：中等
>
> https://leetcode-cn.com/problems/sort-colors/

## 题目

给定一个包含红色、白色和蓝色，一共 `n` 个元素的数组，原地对它们进行排序，使得相
同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

### 示例

#### 示例 1：

```
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
```

#### 示例 2：

```
输入：nums = [2,0,1]
输出：[0,1,2]
```

#### 示例 3：

```
输入：nums = [0]
输出：[0]
```

#### 示例 4：

```
输入：nums = [1]
输出：[1]
```

## 解题

### 基础排序
```typescript
/**
 * 基础排序
 * 执行用时：48 ms
 * 内存消耗：42.4 MB
 * @param nums
 */
export function sortColors(nums: number[]): void {
  let left = 0;
  // 0 往前移
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      left++;
      nums.splice(i, 1);
      nums.unshift(0)
    }
  }

  // 移动 1
  for (let i = left; i < nums.length; i++) {
    if (nums[i] === 1) {
      nums.splice(i, 1);
      nums.splice(left, 0, 1)
    }
  }
}
```

### 三路快排1
```typescript
/**
 * 三路快排1
 * @param nums
 */
export function sortColors1(nums: number[]): void {
  let i = 0;
  let right = nums.length - 1;
  while (i <= right) {
    // 0 往前移
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
      i++
    } else if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      // 2 往后移
      nums.splice(i, 1);
      nums.push(2);
      right--
    }
  }
}
```

### 三路快排2
```typescript
/**
 * 三路快排2
 * 执行用时：56 ms
 * 内存消耗：42.4 MB
 * @param nums
 */
export function sortColors2(nums: number[]): void {
  let i = 0;
  let left = 0;
  let right = nums.length - 1;
  while (i <= right) {
    // 0 往前移
    if (nums[i] === 0) {
      const temp = nums[i];
      nums[i] = nums[left];
      nums[left] = temp;
      left++
      i++
    } else if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      // 2 往后移
      const temp = nums[i];
      nums[i] = nums[right];
      nums[right] = temp;
      right--
    }
  }
}

```
