//Example function to check if a number is divisible by another number
// function checkDivisible(n, divisor) {
// if(n % divisor) {
//     return false;
// } else {
//     return true;
// }
// } 

// console.log(checkDivisible(10, 2)); // true
// console.log(checkDivisible(10, 3)); // false

//String function

function NumberOfDifferentCharacters(str1, str2) {
	//same length
    if (str1.length !== str2.length) {
        return -1
    }

    //number of different characters
    return [...str1].filter((char, i) => char !== str2[i]).length;

    //[...str1] - converting string to array of characters
    //filter - returns a new array with all elements that pass the test implemented by the provided function
    //char - current element being processed in the array
    //i - index of the current element being processed in the array

}

console.log(NumberOfDifferentCharacters(process.argv[2], process.argv[3]));