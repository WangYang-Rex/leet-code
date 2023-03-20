/** 组合数学 */
export function numDupDigitsAtMostN2(n: number): number {
  const A = (x: number, y: number) => {
    let res = 1;
    for (let i = 0; i < x; i++) {
      res *= y--;
    }
    return res;
  }

  const bitCount = (n: number) => {
    return n.toString(2).split('0').join('').length;
  }
  const sn = `${n}`;
  const f = (mask: number, sn: string | any[], i: number, same: boolean) => {
    if (i === sn.length) {
      return 1;
    }
    const t = same ? sn[i].charCodeAt() - '0'.charCodeAt(0) : 9; let res = 0; const c = bitCount(mask) + 1;
    for (let k = 0; k <= t; k++) {
      if ((mask & (1 << k)) !== 0) {
        continue;
      }
      if (same && k === t) {
        res += f(mask | (1 << t), sn, i + 1, true);
      } else if (mask === 0 && k === 0) {
        res += f(0, sn, i + 1, false);
      } else {
        res += A(sn.length - 1 - i, 10 - c);
      }
    }
    return res;
  }
  return n + 1 - f(0, sn, 0, true);
}
/** 动态规划 */
export function numDupDigitsAtMostN1(n: number): number {
  const DP = new Array(n).fill(0); // DP[i] 表示 i 是否重复数字
  // const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  // 处理100的倍数
  const check = (k: number): void => {
    // 10以内的数字不重复
    if (k <= 10) {
      DP[k] = 0;
      return
    }
    // 10以外
    const str = k.toString();
    if (DP[parseInt(str.slice(1))] === 1) {
      DP[k] = 1;
      return
    }
    const arr = str.split('');
    const set = new Set([...arr]);
    if (arr.length !== set.size) {
      DP[k] = 1
    }
  }
  for (let i = 1; i <= n; i++) {
    check(i)
  }
  return DP.filter(it => it !== 0).length
}

/** 暴力解法 */
export function numDupDigitsAtMostN(n: number): number {
  let res = 0;
  // const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  // 处理100的倍数
  const check = (k: number): boolean => {
    const arr = k.toString().split('');
    const set = new Set([...arr]);
    if (arr.length !== set.size) {
      return true
    }
    return false
  }
  for (let i = 1; i <= n; i++) {
    if (check(i)) {
      res++
    }
  }
  return res
}
