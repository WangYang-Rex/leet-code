const gcd = (num1: number, num2: number) => {
  while (num2 !== 0) {
    const temp = num1;
    num1 = num2;
    num2 = temp % num2;
  }
  return num1;
};
export function isGoodArray(nums: number[]): boolean {
  let divisor = nums[0];
  for (const num of nums) {
    divisor = gcd(divisor, num);
    if (divisor === 1) {
      break;
    }
  }
  return divisor === 1;
}
