export function singleNumber(nums: number[]): number {
  let ans = nums[0];
  if (nums.length > 1) {
    for (let i = 1; i < nums.length; i++) {
      ans = ans ^ nums[i] // 异或
    }
  }
  return ans
}
