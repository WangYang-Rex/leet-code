export function movesToMakeZigzag(nums: number[]): number {
  let res1 = 0;
  let res2 = 0;
  for (let i = 0; i < nums.length; i++) {
    const left = nums[i - 1] || nums[i] + 1;
    const right = nums[i + 1] || nums[i] + 1;
    const min = Math.min(left, right);
    if (nums[i] >= min) {
      if (i % 2 === 0) {
        res1 += nums[i] - min + 1;
      } else {
        res2 += nums[i] - min + 1;
      }
    }
  }
  return Math.min(res1, res2);
}
