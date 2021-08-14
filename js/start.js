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


const isCheched = true,
      isClose = false;

// console.log(isCheched || !isClose);


const numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних фильмов?', ''),
      d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
