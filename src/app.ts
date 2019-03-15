console.log('Hello Oleh');

function multiply(one: number, two : number): number {
    return one * two;
}

let myFun: (v1 : number, v2 : number) => number;

myFun = multiply;

console.log(myFun(2,5));

let userData: {name: string, age: number};
userData = {
    name: "Oleh",
    age: 33
};

console.log(userData.name);

let complex: {data: number[], output: (all: boolean)=> number[]};

complex = {
    data: [10, 20, 30, 15.99],
    output: function(a: boolean): number[] {
        if (a) {
        return this.data;
        }
        return [];
    }
}

type Compl = {data: number[], output: (all: boolean) => number[]}; 

let complex2: Compl = {
    data: [1, 2, 3, 4, 5.99],
    output: function(b: boolean): number[] {
        if (b)
        {
            return this.data;
        }
        return [];        
    }
}

console.log(complex.output(false));

let myAge: number | string = 33;
myAge = "33";

console.log(myAge);

function neverReturnAnything(): never {
    throw new Error('Bla Error!');
}

let a = 1099;
console.log(a);