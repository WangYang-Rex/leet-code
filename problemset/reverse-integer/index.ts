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
