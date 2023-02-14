# 存在重复元素 II

> 难度：简单
>
> https://leetcode.cn/problems/contains-duplicate-ii/

## 题目

给你一个整数数组 `nums` 和一个整数 `k` ，判断数组中是否存在两个 不同的索引 `i` 和 `j` ，满足 `nums[i] == nums[j]` 且 `abs(i - j) <= k` 。如果存在，返回 `true` ；否则，返回 `false` 。


### 示例 1：
```
输入：nums = [1,2,3,1], k = 3
输出：true
```
### 示例 2：
```
输入：nums = [1,0,1,1], k = 1
输出：true
```
### 示例 3：
```
输入：nums = [1,2,3,1,2,3], k = 2
输出：false
```

## 解题

### 滑动窗口
```typescript
/**
 * 滑动窗口
 * 控件换时间
 * 执行用时 84ms
 * 内存消耗 61.7MB
 * @param nums
 * @param k
 * @returns
 */
export function containsNearbyDuplicate1(nums: number[], k: number): boolean {
  let exist = false;
  const map = new Map();
  let i = 0;
  while (i < nums.length) {
    if (map.has(nums[i])) {
      if (Math.abs(map.get(nums[i]) - i) <= k) {
        exist = true;
        break;
      }
    }
    map.set(nums[i], i)
    i++;
  }
  return exist;
}
```

### 双指针
```typescript
/**
 * 双指针
 * 执行用时 4908ms
 * 内存消耗 49.8MB
 * @param nums
 * @param k
 * @returns
 */
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let exist = false
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(j - i) <= k) {
        exist = true
        break
      }
    }
    if (exist) {
      break
    }
  }
  return exist
}
```