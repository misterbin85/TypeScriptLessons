console.log("*** Decorators ***")

function logger(constructorFn: Function) {        
    console.log(constructorFn);
}

@logger
class MyClass {
    constructor() {
        console.log("Hi constructor");
    }
}

// Factory
function logOrNot(value: boolean) {
    
    return  value ? logger : null;
}

@logOrNot(true ) 
class secondClass {
    constructor()
    {
        console.log("Hi second constructor");
    }
}

// advanced
function printMethod(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logOrNot(true)
@printMethod
class Plant {
    name: string = "Green tea";
}

let a = new Plant();
(<any>a).print();

// Method Decorators 
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

function overWritable(value: boolean) {
    return function(target: any, propName: string): any {        
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;            
    }
}

function prontParamInfo(target: any, methodName: string, paramIndex: number) {
    console.log(`Target is: ${target}`);
    console.log(`Method name is: ${methodName}`);
    console.log(`Index is: ${paramIndex}`);
}

class Project {
    @overWritable(false)
    projName: string;

    constructor(name: string) {
        this.projName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(3000);
    }
}

const pr = new Project("Test project");
console.log(pr);
pr.calcBudget();

pr.calcBudget = function() {
    console.log(5000);
}

pr.calcBudget(); 


class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @prontParamInfo printAll: boolean) {
        if (printAll) {
            console.log(100);
        } else {
            console.log(10);
        }
    }
}

let course = new Course("Some course");
course.printStudentNumbers("smth", true);
course.printStudentNumbers("smth", false);