//Function to capitalize words

String.prototype.capitalizeWords = function() {
    return this.replace(/\b[a-z]/g, match => match.toUpperCase());
}

console.log("This words will be capitalized".capitalizeWords());

//Function times

Number.prototype.times = function(callback) {

    const n = this;

    for(let i=0; i<n; i++){
        callback(i);
    }
}

Object(3).times((i) => console.log(`Execution number : ${i+1}`)); // also can use Number