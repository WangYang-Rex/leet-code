export function isIsomorphic(s: string, t: string): boolean {
  const len = s.length;
  const mapS: any = {};
  const orderS = [];
  const mapT: any = {};
  const orderT = [];

  for (let i = 0; i < len; i++) {
    if (mapS[s[i]]) {
      mapS[s[i]].push(i);
    } else {
      mapS[s[i]] = [i]
      orderS.push(s[i])
    }

    if (mapT[t[i]]) {
      mapT[t[i]].push(i);
    } else {
      mapT[t[i]] = [i]
      orderT.push(t[i])
    }
  }

  let ans = true;
  if (orderS.length !== orderT.length) {
    ans = false
  } else {
    // let _s = ''; _t = '';
    for (let i = 0; i < orderS.length; i++) {
      // _s =
      if (mapS[orderS[i]].join(',') !== mapT[orderT[i]].join(',')) {
        ans = false;
        break;
      }
    }
  }

  return ans
}

export function isIsomorphic1(s: string, t: string): boolean {
  function fn(s: string, t: string): boolean {
    let ans = true;
    for (let i = 0; i < s.length - 1; i++) {
      for (let j = i + 1; j < s.length; j++) {
        if (s[i] === s[j]) {
          if (t[i] !== t[j]) {
            ans = false
            break;
          }
        }
      }
      if (!ans) {
        break;
      }
    }
    return ans;
  }
  return fn(s, t) && fn(t, s);
}
