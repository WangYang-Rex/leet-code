export function maxRepOpt1(text: string): number {
  let ans = 0;
  let i = 0;
  while (i < text.length) {
    const _obj = {
      start: i,
      end: i,
      _text: text[i],
      length: 0,
    }
    for (let j = i; j < text.length; j++) {
      if (text[j] === text[i]) {
        _obj.end = j;
      } else {
        break;
      }
    }
    let count = 0;
    const afterText = text.slice(_obj.end + 1);
    const beforeText = text.slice(0, _obj.start);
    let restTest = '';
    // 往前找
    if (beforeText.length > 0) {
      if (afterText.includes(_obj._text)) {
        restTest = beforeText.slice(0, beforeText.length - 1) + _obj._text;
      } else if (beforeText.includes(_obj._text)) {
        const _index = beforeText.indexOf(_obj._text);
        restTest = beforeText.slice(0, _index) + beforeText[beforeText.length - 1] + beforeText.slice(_index + 1, beforeText.length - 1) + _obj._text;
      }
      for (let j = restTest.length - 1; j >= 0; j--) {
        if (restTest[j] === _obj._text) {
          count++;
        } else {
          break;
        }
      }
    }
    // 往后找
    if (afterText.length > 0) {
      if (beforeText.includes(_obj._text)) {
        restTest = _obj._text + afterText.slice(1);
      } else if (afterText.includes(_obj._text)) {
        const _index = afterText.lastIndexOf(_obj._text);
        restTest = _obj._text + afterText.slice(1, _index) + afterText[0] + afterText.slice(_index + 1);
      }
      let _count = 0;
      for (let j = 0; j < restTest.length; j++) {
        if (restTest[j] === _obj._text) {
          _count++;
        } else {
          break;
        }
      }
      count = Math.max(count, _count);
    }
    _obj.length = _obj.end - _obj.start + 1 + count;
    ans = Math.max(ans, _obj.length);
    i = _obj.end + 1;
  }
  return ans
}
