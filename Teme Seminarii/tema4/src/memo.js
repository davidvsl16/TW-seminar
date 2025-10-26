//Example Function

function fibGen(){
    const cache =[1, 1]; // Initial values for Fibonacci sequence
    const fib = (index) => {
        if(index < cache.length){
            console.log('found: '+ index);
            return cache[index];
        }else{
            console.log('computed: '+ index);
            cache[index] = fib(index -1) + fib(index -2);
            return cache[index];
        }
    }
    return fib;
}

const f = fibGen();
console.log(f(1));
console.log(f(5));
console.log(f(3));

//Function

function pow(){
    const cache = {}; // used for memorizing results 
    const pow = (a, b) => {
        const key = `${a},${b}`;

        if (key in cache) {
            console.log('found: ' + key);
            return cache[key];
        }

        if(b === 0) return 1;
        if(b === 1) return a;

        console.log('computed: ' + key);
        cache[key] = a * pow(a, b-1);
        return cache[key];
    };

    return pow;
}

//Testing

const p = pow();

console.log(p(2,3));

console.log(p(2,4));

console.log(p(3,3));

console.log(p(2,3));




