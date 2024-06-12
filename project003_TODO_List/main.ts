#!/usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

let todos= [];

let condition=true;
while(condition){
let answer= await inquirer.prompt([{
    name:"todo",
    type:"input",
    message:chalk.hex("#0053a3").italic.underline("what do you want to add in your todos?")
},
{
    name:"add",
    type:"confirm",
    message:chalk.hex("#0053a3").italic.underline("do you want to add more?"),
    default:"false"
}]);
 todos.push(answer.todo);
 condition = answer.add;
 console.log(chalk.hex("#f1d41d")(todos));
}