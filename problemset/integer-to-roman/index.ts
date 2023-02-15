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
    [1, 'I'],
  ]);
  const roman: string[] = [];
  for (const [value, symbol] of romanMap) {
    while (num >= value) {
      num -= value;
      roman.push(symbol);
    }
    if (num === 0) {
      break;
    }
  }

  return roman.join('');
}
