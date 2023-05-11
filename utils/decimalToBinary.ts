/**
 * 十进制转二进制
 * @param decimal
 * @returns
 */
export function decimalToBinary(decimal: number): string {
  if (decimal === 0) { // 如果输入为0，则直接返回'0'
    return '0';
  }

  let binary = ''; // 定义一个字符串用于存储二进制数
  while (decimal > 0) { // 当十进制数大于0时，进行转换
    const remainder = decimal % 2; // 取得当前位的余数
    binary = remainder + binary; // 将余数添加到二进制数的左边
    decimal = Math.floor(decimal / 2); // 更新十进制数
  }

  return binary; // 返回二进制数
}
