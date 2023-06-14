export function numTimesAllBlue(flips: number[]): number {
  const arr = new Array(flips.length + 1).fill(0);
  for (let i = 1; i <= flips.length; i++) {
    arr[flips[i - 1]] = i;
  }
  let ans = 0;
  // DP[i] 表示前 i 位的最大值
  const DP = new Array(flips.length + 1).fill(0);
  for (let i = 1; i <= arr.length; i++) {
    DP[i] = Math.max(DP[i - 1], arr[i]);
    if (DP[i] <= i) {
      ans++;
    }
  }
  return ans
}
