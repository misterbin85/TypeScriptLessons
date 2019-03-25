console.log("***Generics***");
function printSmth(args) {
    args.forEach(function (el) { return console.log(el); });
}
printSmth(["One", "Two"]);
printSmth([1, 2]);
