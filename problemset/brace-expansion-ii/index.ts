export function braceExpansionII(expression: string): string[] {
  const s: Set<string> = new Set();
  const dfs = (exp: string) => {
    const j = exp.indexOf('}');
    if (j === -1) {
      s.add(exp);
      return;
    }
    let i = j;
    while (exp.charAt(i) !== '{') {
      --i;
    }
    const a = exp.substring(0, i);
    const c = exp.substring(j + 1);
    for (const b of exp.substring(i + 1, j).split(',')) {
      dfs(a + b + c);
    }
  };
  dfs(expression);
  return Array.from(s).sort();
}
