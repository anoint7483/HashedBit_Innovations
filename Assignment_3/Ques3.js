// Use splice to change 'INDIA' to 'INDONESIA'

let string = "INDIA".split(""); // Convert to array
string.splice(3, 2, "O", "N", "E", "S", "I", "A"); 
let result = string.join("");
console.log(result);  // Output: "INDONESIA"
