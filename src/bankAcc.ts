import {PI} from "./modules_my/const"

console.log(`From imported module PI equals: ${PI}`);

type bankAcc = { money: number, deposit: (value: number) => void };
type user = { name: string, bankAccount: bankAcc, hobbies: string[] };

let myAcct: bankAcc = {
    money: 3200,
    deposit: function d(v: number): void {
        this.money += v;
    }
} 

let myself: user = {
    name: "SomeUser",
    bankAccount: myAcct,
    hobbies: ["Cars", "Girls", "Snowboarding"]    
}

myself.bankAccount.deposit(200);

console.log(`Bank user ${myself.name} has ${myself.bankAccount.money} money`); 





