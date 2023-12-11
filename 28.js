// Show that 121 is the sum of 11 odd natural numbers.


// Number to be shown as the sum of 11 odd natural numbers
const targetNumber = 121;

// Number of consecutive odd numbers
const count = 11;

// Calculate the sum of 11 odd natural numbers
const sum = count ** 2;

// Check if the sum is equal to the target number
const isSumEqual = sum === targetNumber;

// Output the result
console.log(`Is ${targetNumber} the sum of 11 odd natural numbers? ${isSumEqual}`);
