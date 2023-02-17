/**
 * 两遍扫描
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param nums
 */
export function nextPermutation(nums: number[]): void {
  if (nums.length <= 1) return;
  // 从右往左，找到第一个左边小于右边的数a
  // 从右往左，找到第一个大于a的数b
  // 交换a和b的位置，然后b右边的数从小到大排列
  let i = -1; let j = -1;
  for (let k = nums.length - 1; k >= 1; k--) {
    if (nums[k - 1] < nums[k]) {
      i = k - 1;
      break;
    }
  }
  if (i >= 0) {
    for (let k = nums.length - 1; k > i; k--) {
      if (nums[k] > nums[i]) {
        j = k;
        break;
      }
    }
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    const arr = nums.splice(i + 1, 100);
    arr.sort((a, b) => a - b);
    arr.forEach((aa) => {
      nums.push(aa)
    })
  } else {
    nums.sort((a, b) => a - b)
  }
}
