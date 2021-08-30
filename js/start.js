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


const objWords = {
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

