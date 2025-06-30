function sumOfProduct(n1, n2) {
  let str1 = n1.toString().split('').reverse();
  let str2 = n2.toString().split('').reverse();
  let maxLength = Math.max(str1.length, str2.length);
  let sum = 0;

  for (let i = 0; i < maxLength; i++) {
    let digit1 = parseInt(str1[i] || 0);
    let digit2 = parseInt(str2[i] || 0);
    sum += digit1 * digit2;
  }

  return sum;
}

// Example:
console.log(sumOfProduct(6, 34)); // (6*4) + (0*3) = 24
console.log(sumOfProduct(123, 456)); // (3*6)+(2*5)+(1*4) = 18 + 10 + 4 = 32
