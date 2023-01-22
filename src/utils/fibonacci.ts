export function fibo(n: number) {
  if (n <= 0) return 0;
  if (n === 1 || n === 2) return 1;

  const tup = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextVal = tup[0] + tup[1];
    tup[0] = tup[1];
    tup[1] = nextVal;
  }

  return tup[0] + tup[1];
}
