console.log("*** Interfaces ***")

interface NamedPerson {
    firstName: string;
    age?: number; // optional parameter
    [anyPropName: string] : any; // can add any property name with any type
    greet(lastName: string): void;
}

const myPer: NamedPerson = {
    firstName: "Max",
    age: 27,
    hobbies: ["Travel, Sports"],
    greet(lastName: string) {
        console.log(`Hi, I'm ${this.firstName} ${lastName}`);
    }
};

function ChangeName(person: NamedPerson) {
    person.firstName = "Mister";
}

ChangeName(myPer);
myPer.greet("Bin");

class ConcreatePerson implements NamedPerson {
    firstName: string;
    greet(lastName: string) {
        console.log(`Code from the 'ConcreatePerson' class: Hi, I'm ${this.firstName} ${lastName}`);
    };
}

let per = new ConcreatePerson();
per.firstName = "Maxys";
per.greet("NewLM");


interface SumValuesFunc {
    (n1: number, n2: number): number;
}

let myFunc: SumValuesFunc = function (num1: number, num2: number) {
    return num1 + num2;
};

console.log(`Result of 'myFunc' is: ${myFunc(20, 30)}`);
