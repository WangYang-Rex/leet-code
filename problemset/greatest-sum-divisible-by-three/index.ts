export function maxSumDivThree(nums: number[]): number {
  let f = [0, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  for (const num of nums) {
    const g = [...f];
    for (let i = 0; i < 3; ++i) {
      g[(i + num % 3) % 3] = Math.max(g[(i + num % 3) % 3], f[i] + num);
    }
    f = g;
  }
  return f[0];
}

// export function maxSumDivThree(nums: number[]): number {
//   const arr1: number[] = [];
//   const arr2: number[] = [];
//   let ans = 0;
//   nums = nums.sort();
//   nums.forEach((num) => {
//     ans += num;
//     const x = num % 3;
//     if (x === 1) {
//       arr1.push(num)
//     } else if (x === 2) {
//       arr2.push(num)
//     }
//   })
//   const x = ans % 3;
//   if (x === 1) {
//     if (arr1[0]) {
//       ans -= arr1[0]
//     } else {
//       ans = 0;
//     }
//   } else if (x === 2) {
//     if (arr1.length < 2 && arr2.length < 1) {
//       ans = 0;
//     } else {
//       let max = 0;
//       if (arr1.length >= 2) {
//         max = arr1[0] + arr1[1];
//       }
//       if (arr2.length >= 1) {
//         max = max > 0 ? Math.min(max, arr2[0]) : arr2[0]
//       }
//       ans -= max;
//     }
//   }
//   return ans
// }

maxSumDivThree([2, 6, 2, 2, 7])
