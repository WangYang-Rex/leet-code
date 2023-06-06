export function intersect(nums1: number[], nums2: number[]): number[] {
  const mp1 = new Map();
  nums1.forEach((n: number) => {
    if (mp1.has(n)) {
      mp1.set(n, mp1.get(n) + 1);
    } else {
      mp1.set(n, 1)
    }
  })
  const ans: number[] = [];
  nums2.forEach((n: number) => {
    if (mp1.has(n) && mp1.get(n) > 0) {
      ans.push(n);
      mp1.set(n, mp1.get(n) - 1);
    }
  })
  return ans;
}

// intersect([4, 9, 5], [9, 4, 9, 8, 4])
// intersect([1, 2, 2, 1], [2, 2])
