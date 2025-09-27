//String Manipulation Functions
let text = "hello world";
// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(text));  
// Output: "dlrow olleh"

// Count Characters
function countCharacters(str) {
  return str.length;
}   
console.log(countCharacters(text));  
// Output: 11

// Capitalize Words
function capitalizeWords(str) {
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalizeWords(text));  
// Output: "Hello World"

//Array Manipulation Functions
let numbers = [1, 2, 3, 4, 5];
// Find Maximum Value
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax(numbers));  
// Output: 5
// Find Minimum Value
function findMin(arr) {
  return Math.min(...arr);
}   
console.log(findMin(numbers));  
// Output: 1
// Calculate Sum
function calculateSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}   
console.log(calculateSum(numbers));  
// Output: 15
//filter even numbers
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}   
console.log(filterEvenNumbers(numbers));  
// Output: [2, 4]
//factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}   
console.log(factorial(5));
// Output: 120
//prime number check
function isPrime(num) {
  if (num <= 1) return false;   
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}   
console.log(isPrime(7));  
// Output: true
//fibonacci sequence
function fibonacci(n) {
  let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}   
console.log(fibonacci(7));  
// Output: [0, 1, 1, 2, 3, 5, 8]    
