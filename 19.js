// What will it cost to tile a kitchen floor that is 12 feet wide by 20 feet
// long if the tile cost $8.91 per square yard?



// Dimensions of the kitchen floor
const widthInFeet = 12;
const lengthInFeet = 20;

// Conversion factor from square feet to square yards
const squareFeetToSquareYards = 1 / 9;

// Cost per square yard of the tile
const tileCostPerSquareYard = 8.91;

// Calculate the area of the floor in square feet
const floorAreaInSquareFeet = widthInFeet * lengthInFeet;

// Convert the area to square yards
const floorAreaInSquareYards = floorAreaInSquareFeet * squareFeetToSquareYards;

// Calculate the total cost
const totalCost = floorAreaInSquareYards * tileCostPerSquareYard;

// Print the result
console.log(`The cost to tile the kitchen floor is $${totalCost.toFixed(2)}.`);
