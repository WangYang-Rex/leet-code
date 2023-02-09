# 盛最多水的容器

> 难度：中等
>
> https://leetcode-cn.com/problems/container-with-most-water/

## 题目

给你 n 个非负整数 a<sub>1</sub>，a<sub>2</sub>，...，a<sub>n</sub>，每个数代表坐
标中的一个点(i,a<sub>i</sub>) 。在坐标内画 n 条垂直线，垂直线 `i` 的两个端点分别
为( i,a<sub>i</sub>) 和 (i, 0) 。找出其中的两条线，使得它们与`x`轴共同构成的容器
可以容纳最多的水。

> 说明：你不能倾斜容器。

### 示例

#### 示例 1

![container-with-most-water-1](https://user-images.githubusercontent.com/88995580/159103317-458b4cb8-df1d-4a65-8194-d55d4ed9bacd.jpg)

```
输入：[1,8,6,2,5,4,8,3,7]
输出：49
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为49。
```

#### 示例 2

```
输入：height = [1,1]
输出：1
```

#### 示例 3

```
输入：height = [4,3,2,1,4]
输出：16
```

#### 示例 4：

```
输入：height = [1,2,1]
输出：2
```

## 解法

### 双指针

```typescript
/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param height {number}
 * @return {number}
 */
export function maxArea(height: number[]): number {
  let res = 0;
  let l = 0;
  let r = height.length - 1;
  let _res = 0;
  while (l < r) {
    _res = Math.min(height[l], height[r]) * (r - l);
    if (_res > res) {
      res = _res;
    }
    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }
  return res
}

```
