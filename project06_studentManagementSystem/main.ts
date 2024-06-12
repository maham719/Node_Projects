#!/usr/bin/en node
import inquirer from "inquirer";

class Student {
    static counter:number= 10000;
    id: number;
    name: string;
    courses: string[];
    balance: number;

    constructor(name: string) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 100;
    }

    //defining mehtods to define behaviour of the object
    //method for enrolling the student in courses
    enroll_course(course: string) {
        this.courses.push(course);
    }

    //method for cchecking balance of a student
    check_balance() {
        console.log(`Balance for ${this.name} is : ${this.balance}`);
    }

    //method for paying student fees
    pay_fees(amount: number) {
        this.balance -= amount;
        console.log(`Fees Paid Successfully for ${this.name} with amount ${amount} and remaining balance is ${this.balance}`);
    }
    //method for showing status of a student
    show_status() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses: ${this.courses}`);
        console.log(`Balance: ${this.balance}`);
    }

}

//defining class to manage students

class studentManager {
    students: Student[]

    constructor() {
        this.students = [];
    }

    add_student(name: string) {
        let student = new Student(name);
        this.students.push(student);
        console.log(`Student ${name} added successfully! . Student ID is : ${student.id}`);
    }

    //method to find a student
    find_student(student_id: number) {
        return this.students.find(std => std.id === student_id);
    }

    //method to enroll a student in a course
    enroll_student(student_id: number, course: string) {
        let stdfind = this.find_student(student_id);
        if (stdfind) {
            stdfind.enroll_course(course);
            console.log(`${stdfind.name} is enrolled in ${course} successfully`);
        }
    }
    //method to view balance of a student 
    view_balance(student_id: number) {
        let stdfind = this.find_student(student_id);
        if (stdfind) {
            stdfind.check_balance();
        } else {
            console.log("Student Not Found");
        }
    }

    //methode to pay student fees
    pay_student_fees(student_id: number, amount: number) {
        let stdfind = this.find_student(student_id);
        if (stdfind) {
            stdfind.pay_fees(amount);
        } else {
            console.log("Student Not Found");
        }
    }

    //method to show the status of a student
    show_student_status(student_id: number) {
        let stdfind = this.find_student(student_id);
        if (stdfind) {
            stdfind.show_status();
        } else {
            console.log("Student Not Found");
        }
    }
}

//main function to run the program
async function main() {
    console.log("Welcome to Student Management Systen_by Syeda Maham Amjad");
    console.log("-".repeat(50));

    let manager = new studentManager();

    //using while loop to keep program running
    while (true) {
        let choices = await inquirer.prompt([{
            name: "choice",
            type: "list",
            choices: ["Add Student", "Enroll Student", "view Balance", "Pay Fees", "Show Status", "Exit"]
        }]);
        //using switch case to handle user input
        switch (choices.choice) {
            case "Add Student":
                let name_input = await inquirer.prompt([{
                    name: "name",
                    type: "input",
                    message: "Enter name of the student"
                }]);
                manager.add_student(name_input.name);
                break;

            case "Enroll Student":
                let enroll_input = await inquirer.prompt([{
                       name:"student_id",
                       type:"number",
                       message:"Enter ID of the Srudent",
                },
            {
                name:"course",
                type:"input",
                message:"Enter a course name"
            }]);
            manager.enroll_student(enroll_input.student_id,enroll_input.course);
            break;

            case "view Balance":
                let balance_input=await inquirer.prompt([{
                    name:"student_id",
                    type:"number",
                    message:"Enter ID of the Student"
                }]);
                manager.view_balance(balance_input.student_id);
                break;

                case "Pay Fees":
                    let pay_input=await inquirer.prompt([{
                        name:"student_id",
                        type:"number",
                        message:"Enter ID of the Student",
                    },
                {
                    name:"amount",
                    type:"number",
                    message:"Enter amount to be paid"
                }]);
                manager.pay_student_fees(pay_input.student_id,pay_input.amount);
                break;

                case "Show Status":
                    let status_input=await inquirer.prompt([{
                        name:"student_id",
                        type:"number",
                        message:"Enter ID of the student"
                    }]);
                    manager.show_student_status(status_input.student_id);
                    break;

                    case "Exit":
                        console.log("Exiting the program.....");
                        console.log("Thank You For Using The Program");
                        process.exit();
        }
    }
}
//calling the main function to run the program
main();