//Example Function

class Stream {
    #value; //private field
    #nextValue;
    static #count=0;

    constructor(value, nextValue) {
        this.#value = value;
        this.#nextValue = nextValue;
        Stream.#count++;
    }

    get value() {
        return this.#value;
    }

    get next() {
        this.#value = this.#nextValue(this.#value);
        return this.#value;
    }

    static getCount() {
        return Stream.#count;
    }
}

class ConstantStream extends Stream {
    constructor(value) {
        super(value, value => value);
    }
}

class NextIntegerStream extends Stream {
    constructor(value) {    
        super(0, value => value + 1);
    }
}

const constant = new ConstantStream(1);
const nextInteger = new NextIntegerStream();

for(let i=0; i<10; i++){
    console.log(`constant[${i}]: ${constant.next}`);
    console.log(`nextInteger[${i}]: ${nextInteger.next}`);
}

console.log(`Total Stream instances created: ${Stream.getCount()}`);

//Function

class EvenStream {
    #value; //private field

    constructor(value) {
        this.#value = (value % 2 === 0) ? value : value + 1; // Ensure starting value is even
    }

    get next() {
        const currentValue = this.#value;
        this.#value += 2;
        return currentValue;
    }
}

    const evenStream = new EvenStream(3);
    
    for(let i=0; i<10; i++){
        console.log(`evenStream[${i}]: ${evenStream.next}`);
    }