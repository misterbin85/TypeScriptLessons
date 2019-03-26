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

@logOrNot(false)
class secondClass {
    constructor()
    {
        console.log("Hi second constructor");
    }
}