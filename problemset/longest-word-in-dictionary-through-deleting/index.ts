export function findLongestWord(s: string, dictionary: string[]): string {
  let res = '';
  dictionary.map((d) => {
    let match = true;
    let _s = s;
    for (let i = 0; i < d.length; i++) {
      const _index = _s.indexOf(d[i]);
      if (_index < 0) {
        match = false;
        break;
      } else {
        _s = _s.slice(_index + 1);
      }
    }
    if (match && (d.length > res.length || (d.length === res.length && d < res))) {
      res = d;
    }
    return d
  })
  return res
}
