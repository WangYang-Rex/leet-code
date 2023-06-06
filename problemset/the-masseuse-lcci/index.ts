export function massage(nums: number[]): number {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  const dp = new Array(nums.length)

  for (let i = 0; i < nums.length; i++) {
    dp[i] = [0, 0];
    if (i === 0) {
      dp[i][0] = 0
      dp[i][1] = nums[i]
    } else {
      dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0])
      dp[i][1] = dp[i - 1][0] + nums[i]
    }
  }

  return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1]);
}

// massage([2, 7, 9, 3, 1])
