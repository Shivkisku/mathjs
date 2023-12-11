// How many cubed pieces of fudge that are 3 inches on an edge
// can be packed into a Christmas tin that is 9 inches deep by 12
// inches wide by 9 inches high with the lid still being able to be closed?


// Dimensions of the Christmas tin
const tinDepth = 9;
const tinWidth = 12;
const tinHeight = 9;

// Dimensions of the fudge piece
const fudgeSide = 3;

// Calculate the volume of the tin
const tinVolume = tinDepth * tinWidth * tinHeight;

// Calculate the volume of one fudge piece
const fudgeVolume = Math.pow(fudgeSide, 3);

// Calculate the number of fudge pieces that can be packed
const numberOfFudgePieces = Math.floor(tinVolume / fudgeVolume);

// Print the result
console.log(`You can pack ${numberOfFudgePieces} cubed pieces of fudge into the Christmas tin.`);
