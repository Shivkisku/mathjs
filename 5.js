// A triangle and a parallelogram have the same base and 
// the same area. If the sides of the triangle are 26 cm, 28 cm 
// and 30 cm, and the parallelogram stands on the base 28 cm, find 
// the height of the parallelogram.



// Function to calculate the area of a triangle using Heron's formula
function calculateTriangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Function to calculate the height of a parallelogram given the base and area
function calculateParallelogramHeight(base, area) {
    const height = area / base;
    return height;
}

// Given sides of the triangle
const side1 = 26;
const side2 = 28;
const side3 = 30;

// Given base of the parallelogram
const baseOfParallelogram = 28;

// Calculate the area of the triangle
const areaOfTriangle = calculateTriangleArea(side1, side2, side3);

// Calculate the height of the parallelogram
const heightOfParallelogram = calculateParallelogramHeight(baseOfParallelogram, areaOfTriangle);

// Print the result
console.log("The height of the parallelogram is:", heightOfParallelogram, "centimeters");
