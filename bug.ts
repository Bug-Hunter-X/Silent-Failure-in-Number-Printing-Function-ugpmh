function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine
printNumbers(0); // This will not print anything, but does not throw an error
printNumbers(-5); // This will also not print anything, but does not throw an error