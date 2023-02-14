/**
 * 滑动窗口
 * 执行用时：68 ms
 * 内存消耗：54.9 MB
 * @param nums
 * @param k
 * @returns
 */
export function findMaxAverage(nums: number[], k: number): number {
  // const avg = -1.23456;
  let kSum = 0; // nums.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = kSum;
  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      kSum += nums[i];
      maxSum = kSum;
    } else {
      kSum = kSum - nums[i - k] + nums[i];
      maxSum = Math.max(maxSum, kSum);
    }
  }

  return maxSum / k;
}
