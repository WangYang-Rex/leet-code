export function numberOfPairs(nums: number[]): number[] {
  const set = new Set();
  let count = 0;
  nums.forEach((num) => {
    if (set.has(num)) {
      set.delete(num);
      count++;
    } else {
      set.add(num);
    }
  })
  return [count, set.size]
}
