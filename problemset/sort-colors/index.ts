/**
 * 基础排序
 * 执行用时：48 ms
 * 内存消耗：42.4 MB
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

/**
 * 三路快排1
 * @param nums
 */
export function sortColors1(nums: number[]): void {
  let i = 0;
  let right = nums.length - 1;
  while (i <= right) {
    // 0 往前移
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
      i++
    } else if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      // 2 往后移
      nums.splice(i, 1);
      nums.push(2);
      right--
    }
  }
}
/**
 * 三路快排2
 * 执行用时：56 ms
 * 内存消耗：42.4 MB
 * @param nums
 */
export function sortColors2(nums: number[]): void {
  let i = 0;
  let left = 0;
  let right = nums.length - 1;
  while (i <= right) {
    // 0 往前移
    if (nums[i] === 0) {
      const temp = nums[i];
      nums[i] = nums[left];
      nums[left] = temp;
      left++
      i++
    } else if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      // 2 往后移
      const temp = nums[i];
      nums[i] = nums[right];
      nums[right] = temp;
      right--
    }
  }
}
