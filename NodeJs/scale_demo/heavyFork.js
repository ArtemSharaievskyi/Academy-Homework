function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
const result = factorial(20);
process.send(result);