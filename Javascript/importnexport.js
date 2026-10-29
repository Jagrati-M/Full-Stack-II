// main.js

// Named exports go inside curly braces {}. 
// Default exports go outside the curly braces and can be named anything.
import multiply, { add } from './math.js';

console.log("Addition:", add(5, 3));       // Output: 8
console.log("Multiplication:", multiply(5, 3)); // Output: 15
