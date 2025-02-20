function foo(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b === 0) {
    return a;
  } else if (a === 0) {
    return b;
  } else if (a === b) {
    return a;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(12, 18)); // Output: 6
console.log(foo(15, 25)); // Output: 5
console.log(foo(10, 15)); // Output: 5
console.log(foo(10, 20)); // Output: 10
console.log(foo(21, 12)); // Output: 3
console.log(foo(21, 126));//Output: 21