#!/usr/bin/env node
//importing inquirer from inqurirer to get input from user
import inquirer from "inquirer";
//importing chalk to colorize the output
import chalk from "chalk";
//const answers will store user input 
console.log(chalk.bold("\n\ welcome to \ ' my project \ ' -cli simple calculator"));
const answers = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: chalk.cyanBright("Enter your first number:")
    },
    { name: "num2",
        type: "number",
        message: chalk.cyanBright("Enter your second number:") },
    //message for user so that he/she will choose an operator to perform an operation
    { message: chalk.green("Select one operator to perform operations"),
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division", "modulus"], },
]);
// conditional statements if else 
//the selected operation will be performed and user will get the answer through console.log in green color if user does not select any option console will display a message invalid choice in red color
if (answers.operator === "addition") {
    console.log(chalk.green("your answer is", answers.num1 + answers.num2));
}
else if (answers.operator === "subtraction") {
    console.log(chalk.green("your answer is", answers.num1 - answers.num2));
}
else if (answers.operator === "multiplication") {
    console.log(chalk.green("your answer is", answers.num1 * answers.num2));
}
else if (answers.operator === "division") {
    console.log(chalk.green("your answer is", answers.num1 / answers.num2));
}
else if (answers.operator === "modulus")
    console.log(chalk.green("your answer is", answers.num1 % answers.num2));
else {
    console.log(chalk.red("invalid choice"));
}
