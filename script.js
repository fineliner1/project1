/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
const numberOfFilms = +prompt ('Number of films you watching?', '');
const personalMovieDB = { 
    count : numberOfFilms, 
    movies : {},
    actors : {},
    genre : [],
    privat : false
} ;

//  const a = prompt ('one of the last viewed films?' , ''),
//        b = prompt ('How much would you rate it?',''), 
//        c = prompt ('one of the last viewed films?' , ''),
//        d = prompt ('How much would you rate it?','') ;
//  personalMovieDB.movies[a]=b;
//  personalMovieDB.movies[c]=d;
for ( let i = 0; i < 2; i++) {
    let a = prompt ('one of the last viewed films?' , ''),
        b = prompt ('How much would you rate it?','');
    if ( a != '' && b != '' && a != null && b != null && a.length < 50 ){
        personalMovieDB.movies [a] = b;
        console.log ('Done');
    } else {
        console.log ('Error');
        i--;
    }   
}
if (personalMovieDB.count < 10) {
    console.log ('Просмотрено довольно мало фильмов') ;
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log ('Вы классический зритель');
} else if (personalMovieDB.count > 30 ) {
    console.log('Вы киноман');
} else {
    console.log('error');
}
console.log(personalMovieDB);