//Example Function
// const formatString = (s, ...format) => {
//     let modified = s;

//     for(let i=0; i<format.length; i++) {
//         if(modified.indexOf('{'+i+'}') !== -1) {
//             modified = modified.replace('{'+i+'}', format[i]);
//         }

//     }
//     return modified;
// }

// console.log(formatString("this is a {0} string and we've {1} it", 'nice', 'formatted'));

//Other string formatter function 

const formatString = (s, params) => {
    let modified = s;

    for(let key in params) {
        const regex = new RegExp(`{${key}}`, 'g');
        modified = modified.replace(regex, params[key]);
    }

    return modified;
}


console.log(formatString("un {substantiv} este {adjectiv}", 
    { substantiv: 'căluț', adjectiv: 'drăguț' }));

