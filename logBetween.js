function logBetween(num1, num2) {
  if (num1 > num2) return [];
  let arr = [];
  let arrI = 0;
  for (let i = num1; i <= num2; i++) {
    arr[arrI] = i;
    arrI++;
  }
  return arr;
}
// O(n) time and space, because of num2
// nothing more optimal

console.time('')
console.log(logBetween(-1, 100000000));  // => [-1, 0, 1, 2]
console.timeEnd('')
console.log(logBetween(14, 6));  // => []
console.log(logBetween(4, 6));  // => [4, 5, 6]
