export function countTime(time: string): number {
  // 替换后转换为数字 与 2359 比较
  // 0-2 3
  // 0-4 5
  // 0-5 6
  // 0-9 10
  const timeArr = time.split('');
  let h = 1;
  let m = 1;
  // 比较 01
  if (timeArr[0] === '?' && timeArr[1] === '?') {
    h = 24;
  } else if (timeArr[0] === '?') {
    const a = parseInt(timeArr[1], 10);
    if (a > 3) {
      h = 2;
    } else {
      h = 3
    }
  } else if (timeArr[1] === '?') {
    const a = parseInt(timeArr[0], 10);
    if (a === 2) {
      h = 4;
    } else {
      h = 10;
    }
  }
  // 比较 34
  if (timeArr[3] === '?' && timeArr[4] === '?') {
    m = 60;
  } else if (timeArr[3] === '?') {
    m = 6;
  } else if (timeArr[4] === '?') {
    m = 10;
  }

  return h * m;
}
