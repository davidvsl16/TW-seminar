class InvalidType extends Error {
    constructor() {
        super("InvalidType");
    }
}

class InvalidInput extends Error {
    constructor() {
        super("InvalidInput");
    }
}

const isString = (value) => typeof value === 'string' || value instanceof String;

const textProcessor = (algo, operation, input, options = {}) => {
   
    if (!isString(input) || typeof operation !== 'boolean') {
        throw new InvalidType();
    }

    
    if (algo === "rle") {
        if (/\d/.test(input)) throw new InvalidInput(); 

        if (operation === true) {
            
            let result = "";
            let count = 1;
            for (let i = 0; i < input.length; i++) {
                if (input[i] === input[i + 1]) count++;
                else {
                    result += input[i] + (count > 1 ? count : "");
                    count = 1;
                }
            }
            return result;
        } else {
            
            if (/[^a-zA-Z0-9]/.test(input)) throw new InvalidInput();
            return input.replace(/([a-zA-Z])(\d*)/g, (_, char, num) => char.repeat(num ? parseInt(num) : 1));
        }
    }

    
    else if (algo === "caesar") {
        if (!/^[a-zA-Z\s]*$/.test(input)) throw new InvalidInput();
        if (!options || typeof options.shift !== 'number') throw new InvalidInput();

        const shift = operation ? options.shift : -options.shift;
        const A = "A".charCodeAt(0);
        const a = "a".charCodeAt(0);

        let result = "";
        for (let ch of input) {
            if (ch === " ") {
                result += " ";
                continue;
            }
            if (ch >= "A" && ch <= "Z") {
                const code = ((ch.charCodeAt(0) - A + shift + 26) % 26) + A;
                result += String.fromCharCode(code);
            } else if (ch >= "a" && ch <= "z") {
                const code = ((ch.charCodeAt(0) - a + shift + 26) % 26) + a;
                result += String.fromCharCode(code);
            }
        }
        return result;
    }

    
    else {
        throw new InvalidInput();
    }
}

module.exports = { textProcessor };
