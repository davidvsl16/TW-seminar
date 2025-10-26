//Function to calculate average of an array of numbers using reduce

const numberArray = [3, 1, 4, 2, 5];

const calculateAverage = (numbers) => {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    return total / numbers.length;
};

console.log(calculateAverage(numberArray));


