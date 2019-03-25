console.log("***Generics***");

function printSmth<T>(args: T[]) {
    args.forEach(el => console.log(el));
}

printSmth(["One", "Two"]);

printSmth<number>([1, 2]);

// Generic types

function myFunc1(data: any) {
    return data;
}

function myFuncGen<T>(data: T) {
    return data;
}

const gen: <T>(data: T) => T = myFunc1;
const gen1: <T>(data: T) => T = myFuncGen;
console.log( gen("lol"));
console.log( gen1<number>(555));
    
// Generic class

class SimpleMAth<T extends number | string> {
    FirstValue: T;
    SecondValue: T;
    calculate() {
        return +this.FirstValue * +this.SecondValue;
    }    
}

const mathClass = new SimpleMAth();
mathClass.FirstValue = "10";
mathClass.SecondValue = 20;

console.log(mathClass.calculate());
