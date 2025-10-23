//Example Function

// const sampleArray = [1,2,3,4,5];

// const map = (array, transformation) => {
//     const result = [];
//     for(const element of array) {
//         result.push(transformation(element));
//     }
//     return result;
// }


// console.log(map(sampleArray, (x) => x * 2));

//Reimplement Method reduce (reduceLeft) like a global function

const sampleArray = [1,2,3,4,5];

const reduce = (array, reducer, initialValue) => {
    let accumulator = initialValue;
    for (const element of array) {
        accumulator = reducer(accumulator, element);
    }
    return accumulator;
}

console.log(reduce(sampleArray, (prev, current) => prev + current, 0));


