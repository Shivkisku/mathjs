// A floral design on a floor is made up of 16 tiles which are triangular, the sides of the triangle being 9 cm, 28 cm and 35 cm (see Fig. 12.18). 
// Find the cost of polishing the tiles at the rate of 50p per cm2 .

// Function to calculate the area of a triangle using Heron's formula
function calculateTriangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Given sides of the triangle
const side1 = 9;
const side2 = 28;
const side3 = 35;

// Calculate the area of one triangular tile
const areaOfOneTile = calculateTriangleArea(side1, side2, side3);

// Given number of tiles
const numberOfTiles = 16;

// Calculate the total area of all tiles
const totalAreaOfTiles = areaOfOneTile * numberOfTiles;

// Given cost of polishing per square cm
const costPerSquareCm = 0.5; // 50p = 0.5 Rs

// Calculate the cost of polishing the tiles
const costOfPolishing = totalAreaOfTiles * costPerSquareCm;

// Print the result
console.log("The cost of polishing the tiles is:", costOfPolishing, "Rupees");
