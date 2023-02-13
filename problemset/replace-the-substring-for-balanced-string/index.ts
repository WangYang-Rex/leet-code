/* eslint-disable no-console */
type CountObjType = Record<'Q' | 'W' | 'E' | 'R', Number>;
/** 获取每个字母的数量 */
const getCounts = (str: string): CountObjType => {
  const CountObj: any = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0,
  }
  for (let i = 0; i < str.length; i++) {
    CountObj[str[i]]++
  }
  return CountObj;
}
/** 替换后是否平衡字符串 */
const isBalanceString = (CountObj: CountObjType, _avg: number): boolean => {
  if (CountObj.Q <= _avg
    && CountObj.W <= _avg
    && CountObj.E <= _avg
    && CountObj.R <= _avg) {
    return true
  }
  return false
}
/** 双指针 */
export function balancedString(s: string): number {
  let res = s.length; // 最小可能长度
  const avg = s.length / 4; // 每个字符的数量
  const CountObj = getCounts(s);
  if (isBalanceString(CountObj, avg)) {
    return 0
  }
  // 同向双指针
  for (let left = -1; left < s.length - 1; left++) {
    const _CountObj: any = { ...CountObj };
    for (let right = left + 1; right <= s.length - 1; right++) {
      _CountObj[s[right]]--;
      if (right - left < res) {
        if (isBalanceString(_CountObj, avg)) {
          // if (right - left < res) {
          res = right - left
          // }
        }
      }
    }
  }
  return res
}
