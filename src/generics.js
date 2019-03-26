console.log("***Generics***");
function printSmth(args) {
    args.forEach(function (el) { return console.log(el); });
}
printSmth(["One", "Two"]);
printSmth([1, 2]);
// Generic types
function myFunc1(data) {
    return data;
}
function myFuncGen(data) {
    return data;
}
var gen = myFunc1;
var gen1 = myFuncGen;
console.log(gen("lol"));
console.log(gen1(555));
// Generic class
var SimpleMAth = /** @class */ (function () {
    function SimpleMAth() {
    }
    SimpleMAth.prototype.calculate = function () {
        return +this.FirstValue * +this.SecondValue;
    };
    return SimpleMAth;
}());
var mathClass = new SimpleMAth();
mathClass.FirstValue = "10";
mathClass.SecondValue = 20;
console.log(mathClass.calculate());
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.FirstValue * +this.SecondValue;
    };
    return SimpleMath;
}());
var mathClass2 = new SimpleMath();
mathClass2.FirstValue = "100";
mathClass2.SecondValue = 3;
console.log("Second class with two Generic types: " + mathClass2.calculate());
