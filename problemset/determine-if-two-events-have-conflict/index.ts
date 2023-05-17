const convertTimeToMinutes = (time: string): number => {
  const [h, m] = time.split(':');
  return parseInt(h) * 60 + parseInt(m);
}

export function haveConflict(event1: string[], event2: string[]): boolean {
  const [st1, end1] = event1;
  const [st2, end2] = event2;
  const _st1 = convertTimeToMinutes(st1)
  const _end1 = convertTimeToMinutes(end1)
  const _st2 = convertTimeToMinutes(st2)
  const _end2 = convertTimeToMinutes(end2)
  if (_st2 <= _st1 && _st1 <= _end2) {
    return true
  }
  if (_st2 <= _end1 && _end1 <= _end2) {
    return true
  }
  if (_st1 <= _st2 && _st2 <= _end1) {
    return true
  }
  if (_st1 <= _end2 && _end2 <= _end1) {
    return true
  }
  return false
}
