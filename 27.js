// Three consecutive integers are as such they are taken in increasing order and multiplied by 2, 3, and 4, respectively, they add up to 56. Find these numbers.

// Equation: 2n + 3(n + 1) + 4(n + 2) = 56

// Coefficients
const coefficientN = 2;
const coefficientNPlus1 = 3;
const coefficientNPlus2 = 4;

// Constant term
const constantTerm = 56;

// Solve for n
const n = (constantTerm - coefficientNPlus1 - 2 * coefficientNPlus2) / (coefficientN + coefficientNPlus1 + coefficientNPlus2);

// Calculate consecutive integers
const firstInteger = n;
const secondInteger = n + 1;
const thirdInteger = n + 2;

// Output the result
console.log(`Consecutive Integers: ${firstInteger}, ${secondInteger}, ${thirdInteger}`);
