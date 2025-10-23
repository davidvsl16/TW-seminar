//Example Function

// const words = [
//     "fox",
//     "wolf",
//     "snake",
//     "crocodile",
//     "lion",
//     "cat",
//     "crocodile",
//     "horse"
// ];

// const forbiddenWords = "crocodile";

// const minLength = 4;

// const filterWords = (words, forbiddenWords, minLength) => {
//     return words.filter((word) => word !== forbiddenWords && word.length >= minLength);
// }

// console.log(filterWords(words, forbiddenWords, minLength));


//Function to get all birth years from an array that are greater than 18 years old
const birthYears = [2005, 1990, 2010, 1985, 2000, 2015, 1995];

const currentYear = new Date().getFullYear();

const getAdultBirthYears = (years) => {
    return years.filter((year) => currentYear - year >= 18);
}

console.log(getAdultBirthYears(birthYears));