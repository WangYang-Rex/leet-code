import { arraySort } from 'utils/array/array'
export function findValueOfPartition(nums: number[]): number {
  const sortNums = arraySort.quickSort(nums);
  let min = -1; // 差值
  for (let i = 0; i < sortNums.length - 1; i++) {
    const x = sortNums[i + 1] - sortNums[i];
    if (min === -1 || x < min) {
      min = x;
    }
  }
  return min
}
