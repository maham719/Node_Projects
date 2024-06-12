import inquirer from "inquirer";
const sentence = await inquirer.prompt([{
        name: "sent",
        type: "input",
        message: "Enter Your Sentence To Count Words:"
    }]);
const wordCount = sentence.sent.trim().split(" ");
console.log(wordCount);
console.log(`Your Word Count is ${wordCount.length}`);
