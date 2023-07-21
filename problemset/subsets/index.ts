export function subsets(nums: number[]): number[][] {
  const n = nums.length;
  const res: number[][] = [];

  for (let i = 0; i < (1 << n); i++) {
    const t: number[] = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        t.push(nums[j]);
      }
    }
    res.push(t)
  }
  return res;
}
