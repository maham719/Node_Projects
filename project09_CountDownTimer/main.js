import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
let countdown = await inquirer.prompt({
    name: "seconds",
    type: "number",
    message: "Enter the numner of seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter a number";
        }
        else if (input > 60) {
            return "Please enter a number less than 60";
        }
        else {
            return true;
        }
    }
});
let res = countdown.seconds;
function timer(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intervalTime, currentTime);
        if (timeDifference <= 0) {
            console.log("Timer Has Expired!");
            process.exit();
        }
        const min = Math.floor((timeDifference % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDifference % 60);
        console.log(`${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`);
    }, 1000);
}
timer(res);
