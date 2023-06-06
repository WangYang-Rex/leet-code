export function intersection(nums1: number[], nums2: number[]): number[] {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  const ans: number[] = [];
  s1.forEach((num) => {
    if (s2.has(num)) {
      ans.push(num)
    }
  })
  return ans;
}
