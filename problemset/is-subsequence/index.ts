export function isSubsequence(s: string, t: string): boolean {
  if (s === '') {
    return true
  }
  if (s.length === 1) {
    return t.includes(s)
  }
  // let ans = false;
  let _j = 0;
  let _i = 0;
  for (let i = 0; i < s.length; i++) {
    let pick = false;
    for (let j = _j; j < t.length; j++) {
      if (s[i] === t[j]) {
        pick = true;
        _j = j + 1;
        break;
      }
    }
    if (!pick) {
      break;
    }
    _i = i;
  }

  const ans = _i === s.length - 1;

  return ans
}
// isSubsequence('abc', 'ahbgdc');
// isSubsequence('axc', 'ahbgdc');
// console.log(isSubsequence('b', 'c'))
// isSubsequence('rjufvjafbxnbgriwgokdgqdqewn', 'mjmqqjrmzkvhxlyruonekhhofpzzslupzojfuoztvzmmqvmlhgqxehojfowtrinbatjujaxekbcydldglkbxsqbbnrkhfdnpfbuaktupfftiljwpgglkjqunvithzlzpgikixqeuimmtbiskemplcvljqgvlzvnqxgedxqnznddkiujwhdefziydtquoudzxstpjjitmiimbjfgfjikkjycwgnpdxpeppsturjwkgnifinccvqzwlbmgpdaodzptyrjjkbqmgdrftfbwgimsmjpknuqtijrsnwvtytqqvookinzmkkkrkgwafohflvuedssukjgipgmypakhlckvizmqvycvbxhlljzejcaijqnfgobuhuiahtmxfzoplmmjfxtggwwxliplntkfuxjcnzcqsaagahbbneugiocexcfpszzomumfqpaiydssmihdoewahoswhlnpctjmkyufsvjlrflfiktndubnymenlmpyrhjxfdcq');
export function isSubsequence1(s: string, t: string): boolean {
  const n = s.length; const m = t.length;
  let i = 0; let j = 0;
  while (i < n && j < m) {
    if (s.charAt(i) === t.charAt(j)) {
      i++;
    }
    j++;
  }
  return i === n;
}
