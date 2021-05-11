'use strict';

function first () {
    //Do somthing
    setTimeout(function() {
        console.log(1);

    },500);
}
function second(){
    console.log (2);
}
first();
second();

function learnJs(lang, callback) {
    console.log(` im learning ${lang}`);
    callback();
}
function done() {
    console.log('im  passed this lesson');
}
learnJs('JavaScript',done); 
   