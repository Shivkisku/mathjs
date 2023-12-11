// The angles of a quadrilateral are in the ratio 3 : 5 : 9 : 13.
// Find all the angles of the quadrilateral.



// Function to find angles of a quadrilateral based on given ratios
function findQuadrilateralAngles(ratio1, ratio2, ratio3, ratio4) {
    // Calculate the sum of ratios
    const sumOfRatios = ratio1 + ratio2 + ratio3 + ratio4;

    // Calculate the angles
    const angle1 = (ratio1 / sumOfRatios) * 360;
    const angle2 = (ratio2 / sumOfRatios) * 360;
    const angle3 = (ratio3 / sumOfRatios) * 360;
    const angle4 = (ratio4 / sumOfRatios) * 360;

    return [angle1, angle2, angle3, angle4];
}

// Given ratios
const ratio1 = 3;
const ratio2 = 5;
const ratio3 = 9;
const ratio4 = 13;

// Find the angles of the quadrilateral
const angles = findQuadrilateralAngles(ratio1, ratio2, ratio3, ratio4);

// Print the angles
console.log("Angles of the quadrilateral:", angles);
