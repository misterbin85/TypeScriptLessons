//import {PI} from "./modules_my/const"
var myAcct = {
    money: 3200,
    deposit: function d(v) {
        this.money += v;
    }
};
var myself = {
    name: "SomeUser",
    bankAccount: myAcct,
    hobbies: ["Cars", "Girls", "Snowboarding"]
};
myself.bankAccount.deposit(200);
console.log("Bank user " + myself.name + " has " + myself.bankAccount.money + " money");
