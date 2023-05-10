export function smallestRepunitDivByK(k: number): number {
  // 初始化循环所需的余数 resid 为 1%k, 数位长度 len 为 1
  let resid = 1 % k; let len = 1;
  // 使用 Set 数据结构存储出现过的余数
  const set = new Set();
  set.add(resid);
  // 当余数不为 0 时，继续循环
  while (resid !== 0) {
    // 计算下一个余数
    resid = (resid * 10 + 1) % k;
    // 数位长度加 1
    len++;
    // 若该余数已经出现过，则说明出现了循环，直接返回 -1
    if (set.has(resid)) {
      return -1;
    }
    // 将新的余数加入 Set 中
    set.add(resid);
  }
  // 当余数为 0 时，表示找到了一个长度最短的可被整除的数字，返回长度 len
  return len;
}
