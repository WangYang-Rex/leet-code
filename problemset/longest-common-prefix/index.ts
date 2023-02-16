export function longestCommonPrefix(strs: string[]): string {
  let res = '';
  const first = strs[0];
  if (!first) {
    return res
  }
  if (strs.length === 1) {
    return first
  }
  for (let i = 1; i <= first.length; i++) {
    let isSame = true;
    const _res = first.slice(0, i);
    for (let j = 0; j < strs.length; j++) {
      const _res2 = strs[j].slice(0, i);
      if (_res !== _res2) {
        isSame = false
        break;
      }
    }
    if (!isSame) {
      break
    } else {
      res = _res
    }
  }
  return res
}
