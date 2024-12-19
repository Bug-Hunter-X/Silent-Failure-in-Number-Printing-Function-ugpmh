function printNumbers(n: number): void {
  if (n <= 0) {
    console.error("Input must be a positive integer.");
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine
printNumbers(0); // Throws an error message
printNumbers(-5); // Throws an error message