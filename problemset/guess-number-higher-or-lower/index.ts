export function guessNumber(n: number, num: number): number {
  const guess = (_num: number) => {
    if (num > _num) {
      return 1
    }
    if (num < _num) {
      return -1
    }
    return 0
  }

  let l = 1;
  let r = n;
  let ans = 1;
  let res = guess(ans);
  // 每次都需要重置边界
  while (res !== 0) {
    // 猜小了
    if (res === 1) {
      l = ans + 1
    }
    // 猜大了
    if (res === -1) {
      r = ans - 1
    }
    ans = r - l === 1 ? l : Math.floor((l + r) / 2)
    res = guess(ans);
  }
  return ans;
}

guessNumber(1000, 50)
