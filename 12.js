// A man is climbing up a mountain which is inclined. 
// He has to travel 100 km to reach the top of the mountain.
// Every day He climbs up 2 km forward in the day time. Exhausted,
// he then takes rest there at night time. At night, while he is asleep,
// he slips down 1 km backwards because the mountain is inclined.
// Then how many days does it take him to reach the mountain top? 



// Given parameters
const totalDistance = 100;
const climbForward = 2;
const slipBackward = 1;

// Initialize variables
let distanceClimbed = 0;
let days = 0;

// Simulate the climbing process
while (distanceClimbed < totalDistance) {
    distanceClimbed += climbForward; // Climbing forward during the day
    days++; // Counting each day

    if (distanceClimbed >= totalDistance) {
        // If the man has reached or surpassed the mountain top
        break;
    }

    distanceClimbed -= slipBackward; // Slipping backward at night
}

// Print the result
console.log("It takes", days, "days to reach the mountain top.");
