function logBetweenStepper(num1, num2, step) {
  if (num1 > num2) return [];
  let arr = [];
  let arrI = 0;
  for (let i = num1; i <= num2; i+= step) {
    arr[arrI] = i;
    arrI++;
  }
  return arr;
}
// worst case O(n) , step is 1
// best O(1), step is size of nums
// nothing more optimal

console.log(logBetweenStepper(5, 100000, 1)); // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15]
