//  Each month, Renaldo earns a commission of 10.5% of his total sales 
// for the month, plus a salary of $2,500. If Renaldo earns $3,025 
// in a certain month, what were his total sales?


// Given information
const totalEarnings = 3025;
const commissionRate = 0.105;
const salary = 2500;

// Solve for total sales (S)
const totalSales = (totalEarnings - salary) / commissionRate;

// Print the result
console.log("Renaldo's total sales for the month were:", totalSales.toFixed(2));
