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
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);