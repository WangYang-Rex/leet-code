export function removeDuplicates(nums: number[]): number {
  let t;
  let count = 0;
  let i = 0;
  while (i < nums.length) {
    if (t !== nums[i]) {
      t = nums[i];
      count = 1;
      i++;
    } else {
      // 已经2个了
      if (count === 2) {
        nums.splice(i, 1);
      } else {
        count++;
        i++;
      }
    }
  }
  return nums.length
}
