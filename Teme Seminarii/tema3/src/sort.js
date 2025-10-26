// //Example Function

// const sortObjects = (array, key) => {
//     return array.sort((a, b) => {
//         if (a[key] < b[key]) return -1;
//         if (a[key] > b[key]) return 1;
//         return 0;
//     });
// };

// const laptops =[
//     {
//         brand: 'Dell',
//         proccesor: 'i5',
//         ram: 8
//     },
//     {
//         brand: 'HP',
//         proccesor: 'i7',
//         ram: 16
//     },
//     {
//         brand: 'Apple',
//         proccesor: 'M1',
//         ram: 8
//     },
//     {
//         brand: 'Asus',
//         proccesor: 'i3',
//         ram: 4
//     }
// ]

// const result = sortObjects(laptops, 'ram');
// console.log('result:', result);


//Function that has an array of objects and a string, and returns the array sorted by string

const sortObjects = (array, key) => {
    return array.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
};

const students =[
    {
        name: 'John',
        age: 22
    },
    {
        name: 'Jane',
        age: 20
    },
    {
        name: 'Alice',
        age: 23
    },
    {
        name: 'Bob',
        age: 21
    }
];

const result = sortObjects(students, 'name');
console.log('result:', result);