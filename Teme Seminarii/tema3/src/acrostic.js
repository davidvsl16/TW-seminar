// Example Function

// const dictionary = ["the", "quick", "fox", "jumps", "over", "lazy", "dog"];

// const sampleText = `
//     best
//     read
//     on
//     windy
//     nights
// `;

// const checkAcrostic = (text, dictionary) => {
//     const candidate = text.split('\n')
//         .filter(e => e)
//         .map(e => e.trim())
//         .map(e => e[0])
//         .join('');

//     return dictionary.indexOf(candidate) !== -1;

// };

// console.log(checkAcrostic(sampleText, dictionary));

//Function who censores (not first and last letters) a text based on a list of forbidden words from a dictionary

const forbiddenDictionary = ["este"];

const sampleText = `javascript este minunat`;

const censorText = (text, dictionary) => 
    text.split(' ')
    .map(word => 
        dictionary.includes(word) ?
        word[0] + '*'.repeat(word.length - 2) + word[word.length - 1]
        : word
    )
    .join(' ');

console.log(censorText(sampleText, forbiddenDictionary));
