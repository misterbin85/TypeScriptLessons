console.log('Hello Oleh');
function multiply(one, two) {
    return one * two;
}
var myFun;
myFun = multiply;
console.log(myFun(2, 5));
var userData;
userData = {
    name: "Oleh",
    age: 33
};
console.log(userData.name);
var complex;
complex = {
    data: [10, 20, 30, 15.99],
    output: function (a) {
        if (a) {
            return this.data;
        }
        return [];
    }
};
var complex2 = {
    data: [1, 2, 3, 4, 5.99],
    output: function (b) {
        if (b) {
            return this.data;
        }
        return [];
    }
};
console.log(complex.output(false));
var myAge = 33;
myAge = "33";
console.log(myAge);
function neverReturnAnything() {
    throw new Error('Bla Error!');
}
var a = 1099;
console.log(a);
console.log("Arrow functions");
var multiplyNumbers = function (n1, n2) { return n1 * n2; };
console.log(multiplyNumbers(2, 3));
console.log("END of Arrow functions");
console.log("DESTRUCTURING");
var myUser = {
    someName: "Max",
    age: 21
};
var someName = myUser.someName, age = myUser.age;
console.log(someName, age);
