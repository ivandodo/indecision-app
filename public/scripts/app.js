'use strict';

var square = function square(x) {
    return x * x;
};

// 
var squareArrow = function squareArrow(x) {
    return x * x;
};

// console.log(square(8));
// console.log(squareArrow(9));

var firstName = function firstName(x) {
    return x.split(' ')[0];
};
console.log(firstName('Andrew Mead'));
