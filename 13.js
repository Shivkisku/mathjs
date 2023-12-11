// Look at this series: 53, 53, 40, 40, 27, 27, 
// … What number should come next?

// Given series
const series = [53, 53, 40, 40, 27, 27];

// Calculate the next number in the decreasing sequence
const nextNumber = series[series.length - 1] - 13;

// Print the result
console.log("The next number in the series is:", nextNumber);
