/// <reference path="app.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("HELLO: " + TryNamespace.multiply(2, 3));
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log("The age is: " + this.age);
        this.setWord("Some guy");
    };
    Person.prototype.setWord = function (word) {
        this.word = word;
        console.log(word);
    };
    return Person;
}());
console.log("***Classes:***");
var person = new Person("Some Name", "User_Name");
console.log(person);
person.printAge();
var ExactPerson = /** @class */ (function (_super) {
    __extends(ExactPerson, _super);
    function ExactPerson(n, us, ag) {
        var _this = _super.call(this, n, us) || this;
        _this.age = ag;
        return _this;
    }
    return ExactPerson;
}(Person));
var p = new ExactPerson("bla", "bla-bla", 30);
console.log("Class name is : " + typeof (p));
p.printAge();
