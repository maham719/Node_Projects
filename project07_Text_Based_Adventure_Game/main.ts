#!/usr/bin/env node
//importing inquirer for user input
import inquirer from "inquirer";

//importing chalk for colors
import chalk from "chalk";

//defining classes for players and opponents
class Player {
    name: string;
    feul: number = 100;

    constructor(name: string) {
        this.name = name;
    }
    feulDecrease() {
        let feul = this.feul - 25;
        this.feul = feul;
    }
    feulIncrease() {
        this.feul = 100;
    }
}

class Opponent {
    name: string;
    feul: number = 100;

    constructor(name: string) {
        this.name = name;
    }
    feulDecrease() {
        let feul = this.feul - 25;
        this.feul = feul;
    }
}

//promptiing user for name
let player = await inquirer.prompt([{
    name: "name",
    type: "input",
    message: "Enter Your Name"
}
]);

//prompting user for opponent
let opponent = await inquirer.prompt([{
    name: "select",
    type: "list",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie", "Dragon", "Werewolf", "Vampire"],
}])

//initializing players and opponents
let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

//using while loop to keep the game running

while (true) {
    //options for skeleton starting...
    if (opponent.select == "Skeleton") {

        let ask = await inquirer.prompt({
            name: "action",
            type: "list",
            message: "Choose Your Action",
            choices: ["Attack", "Drink Portion", "Run"]
        });
        if (ask.action == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.feulDecrease();
                console.log(chalk.bold.red(`${p1.name} feul = ${p1.feul}`));
                console.log(chalk.bold.green(`${o1.name} feul = ${o1.feul}`));
                if (p1.feul <= 0) {
                    console.log(chalk.bold.red.italic("You Loose! Try Again"));
                    process.exit();
                }
            } if (num <= 0) {
                o1.feulDecrease();
                console.log(chalk.bold.red(`${p1.name} feul = ${p1.feul}`));
                console.log(chalk.bold.green(`${o1.name} feul = ${o1.feul}`));;
                if (o1.feul <= 0) {
                    console.log(chalk.bold.greenBright.italic("Congratulations! You Win"));
                    process.exit();
                }
            }
        }
        if (ask.action == "Drink Portion") {
            p1.feulIncrease();
            console.log(chalk.bold.green(`You Drank Health Portion! Your Feul is ,${p1.feul}`));
        } if (ask.action == "Run") {
            console.log(chalk.bold.red.italic("You Loose! Try Again"));
            process.exit();
        }
    }
    //--------------------------skeleton code ends here----------------------------------

    //code for Assassin starting...
    if (opponent.select == "Assasin") {

        let ask = await inquirer.prompt({
            name: "action",
            type: "list",
            message: "Choose Your Action",
            choices: ["Attack", "Drink Portion", "Run"]
        });
        if (ask.action == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.feulDecrease();
                console.log(chalk.bold.red(`${p1.name} feul = ${p1.feul}`));
                console.log(chalk.bold.green(`${o1.name} feul = ${o1.feul}`));
                if (p1.feul <= 0) {
                    console.log(chalk.bold.red.italic("You Loose! Try Again"));
                    process.exit();
                }
            } if (num <= 0) {
                o1.feulDecrease();
                console.log(chalk.bold.red(`${p1.name} feul = ${p1.feul}`));
                console.log(chalk.bold.green(`${o1.name} feul = ${o1.feul}`));;
                if (o1.feul <= 0) {
                    console.log(chalk.bold.greenBright.italic("Congratulations! You Win"));
                    process.exit();
                }
            }
        }
        if (ask.action == "Drink Portion") {
            p1.feulIncrease();
            console.log(chalk.bold.green(`You Drank Health Portion! Your Feul is ,${p1.feul}`));
        } if (ask.action == "Run") {
            console.log(chalk.bold.red.italic("You Loose! Try Again"));
            process.exit();
        }
    }

    //--------------------------Assassin code ends here----------------------------------
    
    //code for Zombie starting...
    if (opponent.select=="Zombie"){
    
        let ask= await inquirer.prompt({
            name:"action",
            type:"list",
            message:"Choose Your Action",
            choices:["Attack","Drink Portion","Run"]
        });
        if(ask.action=="Attack"){
            let num = Math.floor(Math.random()*2);
            if(num>0){
                p1.feulDecrease();
                console.log(chalk.bold.red(`${p1.name} feul = ${p1.feul}`));
                console.log(chalk.bold.green(`${o1.name} feul = ${o1.feul}`));
                if(p1.feul<=0){
                    console.log(chalk.bold.red.italic("You Loose! Try Again"));
                    process.exit();
                }
            }if(num <=0){
                o1.feulDecrease();
                console.log(chalk.bold.red(`${p1.name} feul = ${p1.feul}`));
                console.log(chalk.bold.green(`${o1.name} feul = ${o1.feul}`));;
                if(o1.feul<=0){
                    console.log(chalk.bold.greenBright.italic("Congratulations! You Win"));
                    process.exit();
                }
            }
        } 
        if (ask.action=="Drink Portion"){
            p1.feulIncrease();
            console.log(chalk.bold.green(`You Drank Health Portion! Your Feul is ,${p1.feul}`) );
     }if(ask.action=="Run"){
        console.log(chalk.bold.red.italic("You Loose! Try Again"));
        process.exit();
     }
    }

    //--------------------------Zombie Code ends here----------------------------------

    //Code for Dragon starting...

    if (opponent.select=="Dragon"){
    
        let ask= await inquirer.prompt({
            name:"action",
            type:"list",
            message:"Choose Your Action",
            choices:["Attack","Drink Portion","Run"]
        });
        if(ask.action=="Attack"){
            let num = Math.floor(Math.random()*2);
            if(num>0){
                p1.feulDecrease();
                console.log(chalk.bold.red(`${p1.name} feul = ${p1.feul}`));
                console.log(chalk.bold.green(`${o1.name} feul = ${o1.feul}`));
                if(p1.feul<=0){
                    console.log(chalk.bold.red.italic("You Loose! Try Again"));
                    process.exit();
                }
            }if(num <=0){
                o1.feulDecrease();
                console.log(chalk.bold.red(`${p1.name} feul = ${p1.feul}`));
                console.log(chalk.bold.green(`${o1.name} feul = ${o1.feul}`));;
                if(o1.feul<=0){
                    console.log(chalk.bold.greenBright.italic("Congratulations! You Win"));
                    process.exit();
                }
            }
        } 
        if (ask.action=="Drink Portion"){
            p1.feulIncrease();
            console.log(chalk.bold.green(`You Drank Health Portion! Your Feul is ,${p1.feul}`) );
     }if(ask.action=="Run"){
        console.log(chalk.bold.red.italic("You Loose! Try Again"));
        process.exit();
     }
    }

    //--------------------------Dragon code ends here----------------------------------

    //code for Werewolf starting...

    if (opponent.select=="Werewolf"){
    
        let ask= await inquirer.prompt({
            name:"action",
            type:"list",
            message:"Choose Your Action",
            choices:["Attack","Drink Portion","Run"]
        });
        if(ask.action=="Attack"){
            let num = Math.floor(Math.random()*2);
            if(num>0){
                p1.feulDecrease();
                console.log(chalk.bold.red(`${p1.name} feul = ${p1.feul}`));
                console.log(chalk.bold.green(`${o1.name} feul = ${o1.feul}`));
                if(p1.feul<=0){
                    console.log(chalk.bold.red.italic("You Loose! Try Again"));
                    process.exit();
                }
            }if(num <=0){
                o1.feulDecrease();
                console.log(chalk.bold.red(`${p1.name} feul = ${p1.feul}`));
                console.log(chalk.bold.green(`${o1.name} feul = ${o1.feul}`));;
                if(o1.feul<=0){
                    console.log(chalk.bold.greenBright.italic("Congratulations! You Win"));
                    process.exit();
                }
            }
        } 
        if (ask.action=="Drink Portion"){
            p1.feulIncrease();
            console.log(chalk.bold.green(`You Drank Health Portion! Your Feul is ,${p1.feul}`) );
     }if(ask.action=="Run"){
        console.log(chalk.bold.red.italic("You Loose! Try Again"));
        process.exit();
     }
    }

    //--------------------------WereWolf code ends here----------------------------------

    //code for Vampire Starting...

    if (opponent.select=="Vampire"){
    
        let ask= await inquirer.prompt({
            name:"action",
            type:"list",
            message:"Choose Your Action",
            choices:["Attack","Drink Portion","Run"]
        });
        if(ask.action=="Attack"){
            let num = Math.floor(Math.random()*2);
            if(num>0){
                p1.feulDecrease();
                console.log(chalk.bold.red(`${p1.name} feul = ${p1.feul}`));
                console.log(chalk.bold.green(`${o1.name} feul = ${o1.feul}`));
                if(p1.feul<=0){
                    console.log(chalk.bold.red.italic("You Loose! Try Again"));
                    process.exit();
                }
            }if(num <=0){
                o1.feulDecrease();
                console.log(chalk.bold.red(`${p1.name} feul = ${p1.feul}`));
                console.log(chalk.bold.green(`${o1.name} feul = ${o1.feul}`));;
                if(o1.feul<=0){
                    console.log(chalk.bold.greenBright.italic("Congratulations! You Win"));
                    process.exit();
                }
            }
        } 
        if (ask.action=="Drink Portion"){
            p1.feulIncrease();
            console.log(chalk.bold.green(`You Drank Health Portion! Your Feul is ,${p1.feul}`) );
     }if(ask.action=="Run"){
        console.log(chalk.bold.red.italic("You Loose! Try Again"));
        process.exit();
     }
    }


}//cloing of the while loop