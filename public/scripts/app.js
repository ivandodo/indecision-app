"use strict";

var multiplier = {
    numbers: [10, 20, 30],
    multilplyBy: 3,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multilplyBy;
        });
    }
};

console.log(multiplier.multiply());
