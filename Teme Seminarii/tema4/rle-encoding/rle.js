const fs = require('fs'); // used for reading/writing in files

//reads the text from a file (input.txt)

const text = fs.readFileSync('input.txt', 'utf8');

//Function that makes the RLE compression

function rle(str){
    let result ='' // emptry string for the result
    let count = 1; // counter of the same characters

    for(let i=0; i< str.length; i++){
        if(str[i] === str[i+1]){
            count++;
        }else{
            result +=count+str[i];
            count = 1;
        }
    }
    return result;
}

const compressed = rle(text); // aplying the compression

fs.writeFileSync('output.txt', compressed);

console.log('The RLE compression was successfull !')

