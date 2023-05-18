
export function addNegabinary(arr1: number[], arr2: number[]): number[] {
  let i = arr1.length - 1; let j = arr2.length - 1;
  let carry = 0;
  const ans = [];
  while (i >= 0 || j >= 0 || carry !== 0) {
    let x = carry;
    if (i >= 0) {
      x += arr1[i];
    }
    if (j >= 0) {
      x += arr2[j];
    }
    if (x >= 2) {
      ans.push(x - 2);
      carry = -1;
    } else if (x >= 0) {
      ans.push(x);
      carry = 0;
    } else {
      ans.push(1);
      carry = 1;
    }
    --i;
    --j;
  }
  while (ans.length > 1 && ans[ans.length - 1] === 0) {
    ans.splice(ans.length - 1, 1);
  }
  const arr = new Array(ans.length);
  for (i = 0, j = ans.length - 1; j >= 0; i++, j--) {
    arr[i] = ans[j];
  }
  return arr;
}
