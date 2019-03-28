var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
        logOrNot(true)
    ], secondClass);
    return secondClass;
}());
// advanced
function printMethod(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Green tea";
    }
    Plant = __decorate([
        logOrNot(true),
        printMethod
    ], Plant);
    return Plant;
}());
var a = new Plant();
a.print();
// Method Decorators 
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overWritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
function prontParamInfo(target, methodName, paramIndex) {
    console.log("Target is: " + target);
    console.log("Method name is: " + methodName);
    console.log("Index is: " + paramIndex);
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(3000);
    };
    __decorate([
        overWritable(false)
    ], Project.prototype, "projName", void 0);
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var pr = new Project("Test project");
console.log(pr);
pr.calcBudget();
pr.calcBudget = function () {
    console.log(5000);
};
pr.calcBudget();
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(100);
        }
        else {
            console.log(10);
        }
    };
    __decorate([
        __param(1, prontParamInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("Some course");
course.printStudentNumbers("smth", true);
course.printStudentNumbers("smth", false);
