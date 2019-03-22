"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = require("./modules_my/const");
console.log("From imported module PI equals: " + const_1.PI);
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
