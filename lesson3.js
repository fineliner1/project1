const numberOfFilms = prompt ('Number of films you watching?', '');
const personalMovieDB = { 
    count : numberOfFilms, 
    movies : {},
    actors : {},
    genre : [],
    privat : false
} ;

 const a = prompt ('one of the last viewed films?' , ''),
       b = prompt ('How much would you rate it?',''), 
       c = prompt ('one of the last viewed films?' , ''),
       d = prompt ('How much would you rate it?','') ;
 personalMovieDB.movies[a]=b;
 personalMovieDB.movies[c]=d;
console.log (personalMovieDB);

// const объект = { свойство описывающие объект,}