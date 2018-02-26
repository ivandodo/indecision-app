class Person {
    constructor(name = 'Anonimous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year${(this.age % 10 != 1 || Math.floor(this.age / 10) === 1)  ? 's':'' } old.`
    }
 }

 class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        this.hasMajor() ? 
            description += ` Their major is ${this.major}.` :
            null;

        return description;
    }
 }

 class Traveller extends Person {
     constructor(name, age, location){
         super(name, age);
         this.location = location;
     }

     getGreeting() {
         let greeting = super.getGreeting();
         location ? 
            greeting += ` I'm visiting from ${this.location}.`
            : null;

            return greeting;
     }
 }

const me = new Student('Ivan', 31, 'Computer Science');
console.log(me.getDescription());

const other = new Student(undefined, 11);
console.log(other);

const traveller = new Traveller('Ana', 17, 'Moscow');
console.log(traveller.getGreeting());