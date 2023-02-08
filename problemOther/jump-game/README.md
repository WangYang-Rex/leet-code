# 跳跃游戏

> 难度：中等
>
> https://leetcode-cn.com/problems/jump-game/

## 题目

给定一个非负整数数组 `nums` ，你最初位于数组的 **第一个下标** 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。

### 示例

#### 示例 1

```
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
```

#### 示例 2

```
输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
```

## 解题

```typescript
/**
 * 贪心算法
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param nums
 */
export function canJump(nums: number[]): boolean {
  const len = nums.length;
  // 移动步数
  let move = 0;

  for (let i = 0; i < len; i++) {
    if (i <= move) {
      move = Math.max(move, i + nums[i]);
      if (move >= len - 1) {
        return true;
      }
    }
  }

  return false;
}
```
