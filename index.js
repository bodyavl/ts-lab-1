// 1. Variable declarations with types
let count: number = 0;
const message: string = "Hello, world!";
const flag: boolean = true;

// 2. Functions with type annotations
function greet(name: string): string {
  return `Hello, ${name}!`;
}

function add(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

// 3. Loops
for (let i = 1; i <= 10; i++) {
  console.log(`Count: ${i}`);
}

// 4. Conditional statements
if (flag) {
  console.log(message);
} else {
  console.log("Flag is false");
}

// 5. Arrays with types
const numbers: number[] = [];
for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}
console.log(numbers);

// 6. Objects with types
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

const user: User = {
  name: "John",
  age: 30,
  isActive: true,
};

console.log(user);

// 7. Random number generation
for (let i = 0; i < 10; i++) {
  const randomNum: number = Math.floor(Math.random() * 100);
  console.log(`Random number: ${randomNum}`);
}

// 8. Iterating arrays
numbers.forEach((num: number) => {
  console.log(`Number: ${num}`);
});

// 9. String operations
const upperMessage: string = message.toUpperCase();
console.log(upperMessage);

const lowerMessage: string = upperMessage.toLowerCase();
console.log(lowerMessage);

// 10. Date and time
const now: Date = new Date();
console.log(`Current date: ${now}`);

// Repeat similar patterns with variations to fill up 200 lines
for (let i = 1; i <= 200; i++) {
  console.log(`Line ${i}`);
}
