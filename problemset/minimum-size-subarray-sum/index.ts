/**
 * 滑动窗口
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param target
 * @param nums
 * @returns
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLen = Infinity;

  while (right < nums.length) {
    sum += nums[right];
    right++;

    while (sum >= target) {
      minLen = Math.min(minLen, right - left);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

/**
 * 对撞指针
 */
export function minSubArrayLen1(target: number, nums: number[]): number {
  let res = 0;
  let sum = nums.reduce((a, b) => {
    return a + b
  }, 0)
  if (sum < target) return res

  for (let left = 0; left < nums.length; left++) {
    if (sum < target) {
      break;
    }
    let _sum = sum;
    for (let right = nums.length; right > left; right--) {
      _sum = _sum - nums[right - 1]
      if (_sum < target) {
        if (res === 0 || res > right - left) {
          res = right - left;
        }
        break;
      }
    }
    sum = sum - nums[left]
  }

  return res
}
/**
 * 暴力求解
 * @param target
 * @param nums
 * @returns
 */
export function minSubArrayLen2(target: number, nums: number[]): number {
  let res = 0;

  for (let left = 0; left < nums.length; left++) {
    let _sum = 0;
    for (let right = left; right < nums.length; right++) {
      _sum += nums[right];
      if (_sum >= target) {
        if (res === 0 || res > right - left + 1) {
          res = right - left + 1;
        }
        break;
      }
    }
  }

  return res
}
