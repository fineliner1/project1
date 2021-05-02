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
    const a = prompt ('one of the last viewed films?' , ''),
          b = prompt ('How much would you rate it?','');
    // personalMovieDB.movies[a]=b
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a]=b;
        console.log ('Done');
    } else {
        console.log ('Error');
        i--;
    }
if ( personalMovieDB.count < 10 ) {
    console.log ('prosmotreno malo filmov');
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log ('Vy klassicheskij zritel');
}
else if (personalMovieDB.count >= 30){
    console.log('Vi kinoman');
}
else {
    console.log('oshibka');
}

    
 }
console.log (personalMovieDB);

// const объект = { свойство описывающие объект,}
