// Sally is 54 years old and her mother is 80, 
// how many years ago was Sally’s mother times her age?



// Sally's current age
const sallyAge = 54;

// Sally's mother's current age
const motherAge = 80;

// Calculate the age difference
const ageDifference = motherAge - sallyAge;

// Calculate how many years ago Sally's mother was times her age
const yearsAgo = sallyAge - (ageDifference / 2);

// Print the result
console.log("Years ago, Sally's mother was times her age:", yearsAgo);
