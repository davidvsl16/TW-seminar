//example lambda function

// let occurrences = (text, character) => text.split(character).length - 1;

// console.log(occurrences("sample text", "e"));

//example from terminal

let ArrayFromList = (numbersList) =>Array.from(numbersList);

console.log(ArrayFromList(process.argv.slice(2)));
