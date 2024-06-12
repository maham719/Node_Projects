#!/usr/bin/env node
import inquirer from 'inquirer';
import { Faker } from '@faker-js/faker';
import chalk from 'chalk';

class Customer {
    static counter: number = 9002600001;
    firstname: string;
    lastname: string;
    age: number;
    gender: string;
    mobileNo: number;
    accNumber: number;

    constructor(fname: string, lname: string, age: number, gen: string, mobileNo: number) {
        this.firstname = fname;
        this.lastname = lname;
        this.age = age;
        this.gender = gen;
        this.mobileNo = mobileNo;
        this.accNumber = Customer.counter++;
    }

    return() {
        console.log(`Name: ${this.firstname} ${this.lastname}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Contact Details: ${this.mobileNo}`);
        console.log(`Account Number: ${this.accNumber}`);
    }
}

interface BankAccount {
    accNumber: number;
    balance: number;
}

class Bank {
    customers: Customer[] = [];
    accounts: BankAccount[] = [];

    addCustomer(customer: Customer) {
        this.customers.push(customer);
    }

    addAccount(account: BankAccount) {
        this.accounts.push(account);
    }

    getCustomer(accNumber: number) {
        return this.customers.find((customer) => customer.accNumber === accNumber);
    }

    getAccount(accNumber: number) {
        return this.accounts.find((account) => account.accNumber === accNumber);
    }

    deposit(accNumber: number, amount: number) {
        const account = this.getAccount(accNumber);
        if (account) {
            account.balance += amount;
            console.log(`Deposited ${amount} into account ${accNumber}`);
        } else {
            console.log(`Account not found`);
        }
    }

    withdraw(accNumber: number, amount: number) {
        const account = this.getAccount(accNumber);
        if (account) {
            if (account.balance >= amount) {
                account.balance -= amount;
                console.log(`Withdrew ${amount} from account ${accNumber}`);
            } else {
                console.log(`Insufficient balance`);
            }
        } else {
            console.log(`Account not found`);
        }
    }

    checkBalance(accNumber: number) {
        const account = this.getAccount(accNumber);
        if (account) {
            console.log(`Account balance: ${account.balance}`);
        } else {
            console.log(`Account not found`);
        }
    }
}

let myBank = new Bank();

async function mainMenu() {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['Add Customer', 'Deposit', 'Withdraw', 'Check Balance', 'Exit']
    });

    switch (answer.action) {
        case 'Add Customer':
            await addCustomer();
            break;
        case 'Deposit':
            await deposit();
            break;
        case 'Withdraw':
            await withdraw();
            break;
        case 'Check Balance':
            await checkBalance();
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit();
    }

    mainMenu();  // loop back to the main menu
}

async function addCustomer() {
    const customerInfo = await inquirer.prompt([
        { type: 'input', name: 'firstname', message: 'First name:' },
        { type: 'input', name: 'lastname', message: 'Last name:' },
        { type: 'number', name: 'age', message: 'Age:' },
        { type: 'list', name: 'gender', message: 'Gender:', choices: ['Male', 'Female', 'Other'] },
        { type: 'number', name: 'mobileNo', message: 'Mobile number:' }
    ]);

    const newCustomer = new Customer(
        customerInfo.firstname,
        customerInfo.lastname,
        customerInfo.age,
        customerInfo.gender,
        customerInfo.mobileNo
    );

    myBank.addCustomer(newCustomer);
    myBank.addAccount({ accNumber: newCustomer.accNumber, balance: 0 });

    console.log(chalk.green('Customer added successfully!'));
    newCustomer.return();
}

async function deposit() {
    const { accNumber, amount } = await inquirer.prompt([
        { type: 'number', name: 'accNumber', message: 'Account number:' },
        { type: 'number', name: 'amount', message: 'Amount to deposit:' }
    ]);

    myBank.deposit(accNumber, amount);
}

async function withdraw() {
    const { accNumber, amount } = await inquirer.prompt([
        { type: 'number', name: 'accNumber', message: 'Account number:' },
        { type: 'number', name: 'amount', message: 'Amount to withdraw:' }
    ]);

    myBank.withdraw(accNumber, amount);
}

async function checkBalance() {
    const { accNumber } = await inquirer.prompt([
        { type: 'number', name: 'accNumber', message: 'Account number:' }
    ]);

    myBank.checkBalance(accNumber);
}

mainMenu();
