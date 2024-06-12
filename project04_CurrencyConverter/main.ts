#!/usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
const currency:any={
    USD:1,
    EUR:0.93,
    INR:83.52,
    GBP:0.79,
    CHF:0.90,
    CNY:7.32,
    RUB:89.52,
    CAD:1.39,
    AUD:1.53,
    PKR:278.55
}
let exchangeRate = await inquirer.prompt([
    
    {
        name:"from",
        type:"list",
        message:"choose the currency type you want to convert the amount from:",
        choices:["USD","EUR","INR","GBP","CHF","CNY","RUB","CAD","AUD","PKR"]
    },
    {
        name:"to",
        type:"list",
        message:"choose the currency type you want to convert the amount to:",
        choices:["USD","EUR","INR","GBP","CHF","CNY","RUB","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"number",
        message:"Enter The Amount"
    }
 ]);
let fromAmount= currency[exchangeRate.from];
let toAmount= currency[exchangeRate.to];
let amount = exchangeRate.amount;
let baseCurrency = amount/fromAmount;
let convertedAmount= baseCurrency*toAmount;
console.log(chalk.green("the amount in ", exchangeRate.to,"is " , convertedAmount.toFixed(2)));