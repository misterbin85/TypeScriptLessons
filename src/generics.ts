console.log("***Generics***");

function printSmth<T>(args: T[]) {
    args.forEach(el => console.log(el));
}

printSmth(["One", "Two"]);

printSmth<number>([1, 2]);
    
