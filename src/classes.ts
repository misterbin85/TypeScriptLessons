class Person {
    name: string;
    private word: string;
    protected age: number = 27;

    constructor(name: string, public userName: string) {
        this.name = name;
    }

    printAge() {
        console.log(`The age is: ${this.age}`);
        this.setWord("Some guy");
    }

    private setWord(word: string) {
        this.word = word;
        console.log(word); 
    }    
}

console.log("***Classes:***")
const person = new Person("Some Name", "User_Name");
console.log(person);
person.printAge();

class ExactPerson extends Person {
    constructor(n: string, us: string, ag: number) {
        super(n, us);
        this.age = ag;
        
    }
}

let p = new ExactPerson("bla", "bla-bla", 30);
p.printAge();
