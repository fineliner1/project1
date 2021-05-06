'use strict';
//                       аргумент     действие
function showFirstMessage(  text      ) {  
    console.log (text);
    let num = 20;
       }
showFirstMessage('Hello world');
console.log(num);

// function calc(a , b) {
//     return (a + b);    
// }
// console.log(calc(4, 3));
// function declaration
function ret() {
    num = 50;
    //

    return num;
}
const anotherNum = ret();
console.log(anotherNum)
// function expession
const logger = function() {
      console.log('hello')
};
logger();
// стрелочная func
const calc = (a, b) => { 
    console.log('1');
    return a+b;
};
console.log(calc(4, 2));
///////////////////////////////// 
 const str = 'test';
// const arr = [1, 2, 3, 4];
// console.log(arr.length);
console.log (str[1]);
console.log (str.toUpperCase());
 const fruit = 'Some fruit';
 console.log(fruit.indexOf('u'));
  const logg = 'Hello World';
  console.log(logg.slice(-1));
  console.log(logg.substring(6));
  console.log(logg.substr(2, 7));
const num1 = 12.2;
console.log(Math.round(num1));