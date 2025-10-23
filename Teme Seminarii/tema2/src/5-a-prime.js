//example function to check if a number is prime
// const checkPrime = (n) =>{
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// if(process.argv.length < 3){
//     console.log("Not  enough arguments");
// } else{
//     console.log(checkPrime(parseInt(process.argv[2])));
// }

//element from n-th order of Fibonacci sequence

const fibonacci = (n) =>{
    if(n <= 0) return 0;
    if(n === 1) return 1;
    let a = 0, b = 1, temp;
    for(let i = 2; i <= n; i++){
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

console.log(fibonacci(parseInt(process.argv[2])));
