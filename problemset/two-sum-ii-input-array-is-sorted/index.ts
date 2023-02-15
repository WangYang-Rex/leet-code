/**
 * 双指针
 * @param numbers
 * @param target
 * @returns
 */
export function twoSum1(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  let matched = false;
  while (left < right && !matched) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      matched = true
    } else if (sum < target) {
      left++
    } else if (sum > target) {
      right--
    }
  }
  return [left + 1, right + 1]
}

/** 遍历 */
export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  let matched = false;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        left = i + 1;
        right = j + 1;
        matched = true;
        break;
      }
    }
    if (matched) {
      break
    }
  }
  return [left, right]
}
