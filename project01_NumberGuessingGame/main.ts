#!/usr/bin/env node
//importing inquirer for user input
import inquirer from "inquirer";

//importing chalk for colors
import chalk from "chalk";
//using math.random function to generate random numbers and math.floor to round down the generated number because  math.random generates float values

const randomNumber=Math.floor(Math.random()*10)+1;

//prompting the input from use

const answer=await inquirer.prompt([{
    name:"userGuess",
    type:"number",
    message:chalk.cyanBright("Guess a number between 1 to 10"),
},])

if (answer.userGuess===randomNumber){
    console.log("You guessed it right");
}
else{
    console.log(chalk.redBright("Your guess is wrong, the number is "),randomNumber);
}