# 整数转罗马数字

> 难度：中等
>
> https://leetcode-cn.com/problems/integer-to-roman/

## 题目

罗马数字包含以下七种字符：`I`，`V`，`X`，`L`，`C`，`D`和`M`。

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

例如， 罗马数字 2 写做`II`，即为两个并列的 1。12 写做`XII`，即为`X+II`。 27 写
做`XXVII`, 即为`XX+V+II`。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写
做`IIII`，而是`IV`。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的
数值 4 。同样地，数字 9 表示为`IX` 。这个特殊的规则只适用于以下六种情况：

- `I`可以放在`V`(5) 和`X`(10) 的左边，来表示 4 和 9。
- `X`可以放在`L`(50) 和`C`(100) 的左边，来表示 40 和 90。
- `C`可以放在`D`(500) 和`M`(1000) 的左边，来表示 400 和 900。

给你一个整数，将其转为罗马数字。

### 示例

#### 示例 1:

```
输入:num = 3
输出: "III"
```

#### 示例 2:

```
输入:num = 4
输出: "IV"
```

#### 示例 3:

```
输入:num = 9
输出: "IX"
```

#### 示例 4:

```
输入:num = 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.
```

#### 示例 5:

```
输入:num = 1994
输出: "MCMXCIV"
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

## 解法

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度：O(N) N为num的长度  空间复杂度：O(1)
 * @param num {number}
 * @return {string}
 */
export function intToRoman(num: number): string {
  // 1994
  let res = '';
  // 处理1000
  if (num >= 1000) {
    // 取千位数
    const a = parseInt((num / 1000).toString());
    for (let i = 0; i < a; i++) {
      res += 'M'
    }
    num = num - a * 1000
  }
  // 处理900
  if (num >= 900) {
    res += 'CM';
    num = num - 900;
  }
  // 处理500
  if (num >= 500) {
    res += 'D';
    num = num - 500;
  }
  // 处理400
  if (num >= 400) {
    res += 'CD';
    num = num - 400;
  }
  // 处理100
  if (num >= 100) {
    const a = parseInt((num / 100).toString());
    for (let i = 0; i < a; i++) {
      res += 'C'
    }
    num = num - a * 100
  }
  // 处理90
  if (num >= 90) {
    res += 'XC';
    num = num - 90;
  }
  // 处理50
  if (num >= 50) {
    res += 'L';
    num = num - 50;
  }
  // 处理40
  if (num >= 40) {
    res += 'XL';
    num = num - 40;
  }
  // 处理100
  if (num >= 10) {
    const a = parseInt((num / 10).toString());
    for (let i = 0; i < a; i++) {
      res += 'X'
    }
    num = num - a * 10
  }
  // 处理9
  if (num >= 9) {
    res += 'IX';
    num = num - 9;
  }
  // 处理5
  if (num >= 5) {
    res += 'V';
    num = num - 5;
  }
  // 处理4
  if (num >= 4) {
    res += 'IV';
    num = num - 4;
  }
  // 处理1
  if (num >= 1) {
    const a = parseInt((num / 1).toString());
    for (let i = 0; i < a; i++) {
      res += 'I'
    }
    num = num - a * 1
  }
  return res;
}

```

### 模拟

```typescript
/**
 * 模拟
 * @desc 时间复杂度：O(1)  空间复杂度：O(1)
 * @param num {number}
 * @return {string}
 */
export function intToRoman2(num: number): string {
  const romanMap: Map<number, string> = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]);
  const roman: string[] = [];
  for (const [value, symbol] of romanMap) {
    while (num >= value) {
      num -= value;
      roman.push(symbol);
    }
    if (num == 0) {
      break;
    }
  }

  return roman.join('');
}
```

### 硬编码数字

```typescript
/**
 * 硬编码数字
 * @desc 时间复杂度：O(1)  空间复杂度：O(1)
 * @param num {number}
 * @return {string}
 */
export function intToRoman3(num: number): string {
  const thousands: string[] = ['', 'M', 'MM', 'MMM'];
  const hundreds: string[] = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM'
  ];
  const tens: string[] = [
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC'
  ];
  const ones: string[] = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX'
  ];

  const roman: string[] = [];
  roman.push(thousands[Math.floor(num / 1000)]);
  roman.push(hundreds[Math.floor((num % 1000) / 100)]);
  roman.push(tens[Math.floor((num % 100) / 10)]);
  roman.push(ones[num % 10]);
  return roman.join('');
}
```
