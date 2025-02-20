function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(12, 18)); // Output: true
console.log(foo(15, 25)); // Output: true
console.log(foo(10, 15)); // Output: true
console.log(foo(10, 20)); // Output: false
console.log(foo(21, 12)); // Output: true
console.log(foo(21, 126));//Output: true