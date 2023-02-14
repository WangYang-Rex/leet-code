/**
 * 双指针
 * @param nums
 * @param k
 * @returns
 */
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let exist = false
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(j - i) <= k) {
        exist = true
        break
      }
    }
    if (exist) {
      break
    }
  }
  return exist
}
/**
 * 滑动窗口
 * @param nums
 * @param k
 * @returns
 */
export function containsNearbyDuplicate1(nums: number[], k: number): boolean {
  let exist = false;
  const map = new Map();
  let i = 0;
  while (i < nums.length) {
    if (map.has(nums[i])) {
      if (Math.abs(map.get(nums[i]) - i) <= k) {
        exist = true;
        break;
      }
    }
    map.set(nums[i], i)
    i++;
  }
  return exist;
}
