'use strict';
 
if (4 == 4) {
    console.log('ok');
} 
else {
    console.log('Error');
}
///////////////////////////////////////////
const num = 50;
if (num < 49) {
    console.log ('Error');
}
else if (num > 100) {
    console.log('To big');

} else {
    console.log('ok');
}
//////////////////////////////////////////
// тернарный оператор
//           if                  else
(num === 50 ) ? console.log('Ok') : console.log('Error');
// бинарный оператор
4+4;
// унарный аргумент
+'4';
//////////////////////////////////////////
const num = 49;
switch (num) {
    case 49:
        console.log ('Wrong');
        break;
    case 100:
        console.log('wrong');
        break;
    case 50:
        console.log('ok')
        break;
    default:
        console.log('next time');
        }