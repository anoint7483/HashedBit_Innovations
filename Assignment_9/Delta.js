
// 1. Variable Scope: var, let, const
function variableScopeDemo() {
  var a = "I am var";      // function-scoped
  let b = "I am let";      // block-scoped
  const c = "I am const";  // block-scoped

  console.log(a);
  console.log(b);
  console.log(c);
}
variableScopeDemo();

// 2. Return the second fruit from an array
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
function getSecondFruit(arr) {
  return arr[1];
}
console.log("Second fruit:", getSecondFruit(fruits));

// 3. Modify array using push and pop
function modifyArray(arr) {
  arr.push("New Element");
  arr.pop(); // removes the element we just pushed
  return arr;
}
console.log("Modified Array:", modifyArray(["A", "B", "C"]));

// 4. Square each number using map()
const numbers = [1, 2, 3, 4, 5];
function squareNumbers(arr) {
  return arr.map(num => num * num);
}
console.log("Squared Numbers:", squareNumbers(numbers));

// 5. Filter out even numbers using filter()
function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log("Odd Numbers:", getOddNumbers([1, 2, 3, 4, 5, 6]));

// 6. Object with properties and greeting
const person = {
  name: "Abhishek",
  age: 22,
  occupation: "Developer"
};
function greetPerson(p) {
  console.log(`Hello, my name is ${p.name}. I am a ${p.age}-year-old ${p.occupation}.`);
}
greetPerson(person);

// 7. Calculate area of rectangle
function getRectangleArea(rect) {
  return rect.width * rect.height;
}
console.log("Area of Rectangle:", getRectangleArea({ width: 10, height: 5 }));

// 8. Return keys of an object
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log("Keys of object:", getObjectKeys({ a: 1, b: 2, c: 3 }));

// 9. Merge two objects using Object.assign()
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log("Merged Object:", mergeObjects({ a: 1 }, { b: 2 }));

// 10. Sum of array using reduce()
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of Numbers:", sumArray([10, 20, 30, 40]));
