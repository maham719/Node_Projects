import inquirer from "inquirer";
import chalk from "chalk";
console.log("-------Welcome to my quiz system-------");
const apiLink = "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple";
let fetchData = async (data) => {
    let fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res.results;
};
let data = await fetchData(apiLink);
let startQuiz = async () => {
    let score = 0;
    //to get user name
    let name = await inquirer.prompt({
        name: "username",
        type: "input",
        message: "Enter Your Name:"
    });
    for (let i = 1; i < 10; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = await inquirer.prompt({
            name: "quiz",
            type: "list",
            message: data[i].question,
            choices: answers.map((val) => val)
        });
        if (ans.quiz === data[i].correct_answer) {
            score++;
        }
    }
    console.log(` ${name.username} Your Score is ${score}`);
    console.log(chalk.hex("#60f500")("The correct answers for the quetions are:"));
    data.map((val) => console.log(val.correct_answer));
};
startQuiz();
