// Given information
const totalFinalists = 5;
const awardsToGive = 2;

// Calculate the number of ways to give out the awards (combinations)
const waysToGiveAwards = factorial(totalFinalists) / (factorial(awardsToGive) * factorial(totalFinalists - awardsToGive));

// Print the result
console.log("Number of ways to give out the awards:", waysToGiveAwards);

// Function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
