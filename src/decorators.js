var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("*** Decorators ***");
function logger(constructorFn) {
    console.log(constructorFn);
}
var MyClass = /** @class */ (function () {
    function MyClass() {
        console.log("Hi constructor");
    }
    MyClass = __decorate([
        logger
    ], MyClass);
    return MyClass;
}());
// Factory
function logOrNot(value) {
    return value ? logger : null;
}
var secondClass = /** @class */ (function () {
    function secondClass() {
        console.log("Hi second constructor");
    }
    secondClass = __decorate([
        logOrNot(false)
    ], secondClass);
    return secondClass;
}());
