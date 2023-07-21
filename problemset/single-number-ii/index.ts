export function singleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let ans: number = nums[0];
  let index = 0;
  while (index < nums.length) {
    if (nums[index] === nums[index + 2]) {
      index = index + 3
    } else {
      ans = nums[index]
      index = nums.length
    }
  }
  return ans
}
