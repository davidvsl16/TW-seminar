//Example Function

// const getTotalArea = (squareDimensions) => 
//  squareDimensions
// .map(side => side * side)
// .reduce((prev, current) =>  prev + current, 0); // returns 0 if array is empty

// const sides = [3, 5, 12, 3, 5, 3];

// const result = getTotalArea(sides);

// console.log("result: ", result);    


//Function wich gets an array of numbers and a divisor and returns the sum of the numbers that are divisible by the divisor
const numbers = [10, 15, 20, 25, 30, 35, 40];
const divisor = 5;

const sumDivisibleBy = (nums, div) => {
    return nums
    .map(num => (num % div === 0 ? num : 0))
    .reduce((prev, current) => prev + current, 0);
}

console.log(sumDivisibleBy(numbers, divisor));