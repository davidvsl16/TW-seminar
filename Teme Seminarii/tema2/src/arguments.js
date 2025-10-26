//example function

// function addToArray(array, ...args) {
//     for(var i =0; i<args.length; i++) {
//         array.push(args[i]);
//     }
//     return array;
// }

// let array = ["a"];

// console.log(addToArray(array, "b", "c").join(', ')); 

//function concatenate 2 arrays

function concatenateArrays(arr1, arr2) {
    
    if(arr1.length !== arr2.length) {
        return [];
    }

    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i], arr2[i]);
    }

    return result;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

console.log(concatenateArrays(arr1,arr2).join(', '));

