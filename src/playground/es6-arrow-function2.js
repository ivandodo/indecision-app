const multiplier = {
    numbers: [10, 20, 30],
    multilplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number*this.multilplyBy);
    }
}

console.log(multiplier.multiply());