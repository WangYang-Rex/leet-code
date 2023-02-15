/**
 * 暴力解法
 * @param nums
 */
export function sortColors(nums: number[]): void {
  let left = 0;
  // 0 往前移
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      left++;
      nums.splice(i, 1);
      nums.unshift(0)
    }
  }

  // 移动 1
  for (let i = left; i < nums.length; i++) {
    if (nums[i] === 1) {
      nums.splice(i, 1);
      nums.splice(left, 0, 1)
    }
  }
}
