

// Sides of a triangle are in the ratio of 12 : 17 : 25 
// and its perimeter is 540cm. Find its area.



// Function to calculate the area of a triangle using Heron's formula
function calculateTriangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Given ratio of sides
const ratio12 = 12;
const ratio17 = 17;
const ratio25 = 25;

// Calculate individual side lengths based on the ratio
const commonFactor = 540 / (ratio12 + ratio17 + ratio25);
const side12 = ratio12 * commonFactor;
const side17 = ratio17 * commonFactor;
const side25 = ratio25 * commonFactor;

// Calculate the area of the triangle
const area = calculateTriangleArea(side12, side17, side25);

// Print the result
console.log("The area of the triangle is:", area, "square centimeters");
