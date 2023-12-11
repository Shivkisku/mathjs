// You are lying 120 ft away from a tree that is 50 feet tall.
// You look up at the top of the tree. Approximately how far is your
// hear from the top of the tree in a straight line?



// Given information
const treeHeight = 50; // height of the tree in feet
const distanceFromTree = 120; // distance from the tree in feet

// Calculate the distance from your head to the top of the tree using the Pythagorean Theorem
const distanceToTopOfTree = Math.sqrt(Math.pow(distanceFromTree, 2) + Math.pow(treeHeight, 2));

// Print the result
console.log(`The approximate distance from your head to the top of the tree is ${distanceToTopOfTree.toFixed(2)} feet.`);
