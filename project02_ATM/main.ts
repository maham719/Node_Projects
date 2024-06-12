#!/usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

let myBalance = 100000;
console.log(chalk.green.underline.bold("your Current Balance"), myBalance);
let myPin= 1234;

let pinAnswer = await inquirer.prompt([{
    name:"Q1",
    type:"number",
    message:chalk.blue.bold("Enter Your Pin")
}]);

if(pinAnswer.Q1 === myPin){
    let operation=await inquirer.prompt({
        name:"actions",
        message:chalk.blueBright.bold("Please Select Your Action"),
        type:"list",
        choices:["Withdraw","Check Balance"],
    },
    );
    if(operation.actions==="Withdraw"){
        let withdrawAmount=await inquirer.prompt([{
            name:"amount",
            type:"number",
            message:"Enter Amount",
        }]);
        myBalance=myBalance-withdrawAmount.amount
        console.log(chalk.greenBright("Your New Balance is"), myBalance);
    }else if (operation.actions==="Check Balance"){
        console.log(chalk.greenBright("Your  Balance is "), myBalance);
    }
}else{
    console.log(chalk.redBright("wrong Pin"));
}