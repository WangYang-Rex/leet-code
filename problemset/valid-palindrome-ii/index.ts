/**
 * 双指针
 * @param s
 * @returns
 */
export function validPalindrome(s: string): boolean {
  const fn = (str: string): boolean => {
    let res = true;
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        res = false;
        break;
      }
    }
    return res;
  }
  // let res = false;
  let left = 0;
  let right = s.length - 1;
  let changeCount = 0;
  while (left < right && changeCount < 2) {
    if (s[left] === s[right]) {
      left++;
      right--
    } else {
      const leftStr = s.slice(left + 1, right + 1);
      const rightStr = s.slice(left, right);
      if (fn(leftStr) || fn(rightStr)) {
        changeCount++;
        left = right; // 中止
      } else {
        changeCount = 2;
      }
    }
  }
  return changeCount < 2
}
// export function validPalindrome(s: string): boolean {
//   function isValid(s: string): boolean {
//     let res = true;
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] !== s[s.length - 1 - i]) {
//         res = false
//         break;
//       }
//     }
//     return res
//   }

//   let res = false;
//   for (let i = 0; i < s.length; i++) {
//     if (isValid(s.slice(0, i) + s.slice(i + 1))) {
//       res = true
//       break;
//     }
//   }
//   return res
// }
