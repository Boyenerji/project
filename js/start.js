"use strict";

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(incr++);
// console.log(decr--);

// console.log(2 + 2 * 2 != 8);


// const isCheched = true,
//       isClose = false;

// console.log(isCheched || !isClose);


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');
    }
}

// start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}


// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}

// detectPersonalLevel();


// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по номером ${i}`); 
//     }
// }

// writeYourGenres();

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Ошибка');
// }


// if (4 == 9) {
//     console.log('OK');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Конграт');
// }

// // const num = 50;
// (num === 50) ? console.log('Конграт') : console.log('error');


// const num = 50;
// switch (num) {
//     case 49:
//         console.log('Ошибка');
//         break;
//     case 100:
//         console.log('Ошибка не 100');
//         break;
//     case 50:
//         console.log('Ошибка не 100');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }



// let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);


// let num = 50;
// for (let i = 1; i < 10; i++) {
//     if (i === 5) {
//         // break;
//         continue;
//     }
//     console.log(i);  
// }


// function showMessage(text) {
//     console.log(text);
// }

// showMessage('Hello world');


// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));


// function ret() {
//     let num = 50;
//     return num;
// }

// const test = ret();
// console.log(test);

// const logger = function() {
//     console.log('Hello');
// };

// logger();


// const calc = (a, b) => a + b;


// const calcTwo = (a, b) => {
//     return a + b;
// };


// const str = 'test';

// console.log(str.length);


// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world';
// console.log(logg.slice(6, 11)); // Выбрать с шестой до 11 позиции
// console.log(logg.substr(6, 11)); // Выбрать с шестой позиции 5 символов


// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

// options.makeTest();

const {border, bg} = options.colors;
console.log(border);
// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);


// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;  
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);



const arr = [1, 13, 3, 26, 8];

arr.sort(compareNum);
console.log(arr);


function compareNum(a, b) {
    return a - b;
}
// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.pop();
// arr.push(10);

// console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }


// const str = prompt('','');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

// console.log(products.join('; '));


// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);


// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5, 
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;


// console.log(newNumbers);
// console.log(numbers);


const numbers = {
    a: 2,
    b: 5, 
    c: {
        x: 7,
        y: 4
    }
};

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;
// console.log(add);
// console.log(clone);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adsadasdsa';
console.log(newArray);
console.log(oldArray);


const video = ['Youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);


const array = ['a', 'b'];
const newAarray = [...array];


const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(q);
console.log(newObj);