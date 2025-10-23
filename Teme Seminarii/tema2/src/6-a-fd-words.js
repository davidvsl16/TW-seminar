//example function

const sampleString = 'the quick brown fox jumps over the lazy dog';

const getCounts = (text) => {
    const words = text.split(' ');
    const result = {};

    for(let word of words) {
        if(word in result) {
            result[word]++;
        } else{
            result[word] = 1;
        }
    }

    for(let word in result){
        result[word] /= words.length;
    }
    return result;
}

console.log(getCounts(sampleString));


//function for frequency of letters in a text

const getLetterFrequency = (text) => {
    const letters = text.replace(/\s/g, '').split('');
    const result = {};
    const total = letters.length;

    for(let letter of letters) {
        if(letter in result) {
            result[letter]++;
        } else{
            result[letter] = 1;
        }
}

    for(let letter in result){
        result[letter] /= total;
    }
    return result;
}

console.log(getLetterFrequency(sampleString));