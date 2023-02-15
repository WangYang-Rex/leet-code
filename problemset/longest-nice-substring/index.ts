export function longestNiceSubstring(s: string): string {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    const set = new Set();
    let sum = 0; // 表示是否美好字符串
    let curStr = '';
    for (let j = i; j < s.length; j++) {
      curStr = curStr + s[j];
      // 是否处理过当前字符
      if (!set.has(s[j])) {
        const t = s[j] <= 'Z' ? s[j].toLowerCase() : s[j].toUpperCase();
        if (set.has(t)) {
          sum--;
        } else {
          sum++;
        }
        set.add(s[j]);
      }
      // 判断 curStr 是否是美好字符串
      if (sum === 0) {
        if (curStr.length > res.length) {
          res = curStr;
        }
      }
    }
  }
  return res;
}
