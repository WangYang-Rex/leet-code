# 整数反转

> 难度：中等
>
> https://leetcode-cn.com/problems/reverse-integer/

## 题目

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围`[−2^31, 2^31− 1]`，就返回 `0`。

假设环境不允许存储 64 位整数（有符号或无符号）。

### 示例

#### 示例 1：

```
输入：x = 123
输出：321
```

#### 示例 2：

```
输入：x = -123
输出：-321
```

#### 示例 3：

```
输入：x = 120
输出：21
```

#### 示例 4：

```
输入：x = 0
输出：0
```

## 解法

```typescript
export function reverse(x: number): number {
  // 判断是否负数
  let fu = false;
  let str = x.toString();
  if (str[0] === '-') {
    fu = true;
    str = str.slice(1)
  }
  let aa = '';
  for (let i = str.length - 1; i >= 0; i--) {
    aa += str[i]
  }
  let res = parseFloat(aa);
  if (res > Math.pow(2, 31))
    return 0
  if (fu) {
    res = res * -1
  }
  return res;
}
```
