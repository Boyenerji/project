"use strict";

let number = 5;
const leftBorderWidth = 1;





let incr = 10,
    decr = 10;

// ++incr;
// --decr;

// console.log(incr++);
// console.log(decr--);

// console.log(2 + 2 * 2 != 8);


// const isCheched = true,
//       isClose = false;

// console.log(isCheched || !isClose);


const numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB.count);


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

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}


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