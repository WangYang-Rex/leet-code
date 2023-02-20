export function numberOfArithmeticSlices(nums: number[]): number {
  let res = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let temp = false;
    for (let j = i + 1; j < nums.length - 1; j++) {
      const a = nums[j - 1];
      const b = nums[j];
      const c = nums[j + 1];
      if (j === i + 1) {
        if (b - a === c - b) {
          temp = true;
        }
      }
      if (b - a === c - b) {
        if (temp) {
          res++
        }
      } else {
        temp = false
      }
    }
  }
  return res
}
