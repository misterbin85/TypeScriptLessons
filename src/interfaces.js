console.log("*** Interfaces ***");
var myPer = {
    firstName: "Max",
    age: 27,
    hobbies: ["Travel, Sports"],
    greet: function (lastName) {
        console.log("Hi, I'm " + this.firstName + " " + lastName);
    }
};
function ChangeName(person) {
    person.firstName = "Mister";
}
ChangeName(myPer);
myPer.greet("Bin");
var ConcreatePerson = /** @class */ (function () {
    function ConcreatePerson() {
    }
    ConcreatePerson.prototype.greet = function (lastName) {
        console.log("Code from the 'ConcreatePerson' class: Hi, I'm " + this.firstName + " " + lastName);
    };
    ;
    return ConcreatePerson;
}());
var per = new ConcreatePerson();
per.firstName = "Maxys";
per.greet("NewLM");
var myFunc = function (num1, num2) {
    return num1 + num2;
};
console.log("Result of 'myFunc' is: " + myFunc(20, 30));
