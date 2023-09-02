// These numbers are public

let p = 23;
let g = 5;

// Private keys
let a = 6;
let b = 15;

// Public value calculation
let A = Math.pow(g, a) % p;
let B = Math.pow(g, b) % p;

// Shared Secret Calculation
let secret_Alice = Math.pow(B, a) % p;
let secret_Bob = Math.pow(A, b) % p;

console.log(`**********`);
console.log(`Public values calculation A: ${A}, B: ${B}`);
console.log(
  `SharedSecret values calculation Alice: ${secret_Alice}, Bob: ${secret_Bob}`
);
console.log(`***********`);
