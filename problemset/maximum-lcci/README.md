# 最大数值

> 难度：简单
>
> https://leetcode.cn/problems/maximum-lcci/

## 题目

编写一个方法，找出两个数字a和b中最大的那一个。不得使用if-else或其他比较运算符。

### 示例：
```
输入： a = 1, b = 2
输出： 2
```

## 题解

```javascript
export function maximum(a: number, b: number): number {
  return Math.max(a, b)
}

```
