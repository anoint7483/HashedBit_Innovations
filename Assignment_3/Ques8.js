// Sum of digits until one digit remains

function repeatedDigitSum(num) {
  while (num > 9) {
    num = num.toString().split('').reduce((sum, d) => sum + parseInt(d), 0);
  }
  return num;
}

console.log(repeatedDigitSum(456));  
