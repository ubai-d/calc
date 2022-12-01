#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let raindow = chalkAnimation.rainbow("     <<<<<develop by Ubaid>>>>>");
    await sleep();
    console.log(chalk.greenBright `\n Lets start Calculations`);
    console.log(chalk.cyanBright `
     _____________________
    |  _________________  |
    | | ST           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
    raindow.stop();
}
;
welcome();
async function askquestion() {
    setTimeout(() => {
        inquirer
            .prompt([
            {
                type: "list",
                name: "operator",
                message: 'Which operation did you want to perform',
                choices: ["Addition", "Multipliction", "Subtraction", "Division", "Exponention"]
            },
            {
                type: "number",
                name: "num1",
                message: "Enter your First Number"
            },
            {
                type: "number",
                name: "num2",
                message: "Enter your Second Number"
            }
        ])
            .then((answers) => {
            if (answers.operator == "Addition") {
                console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
            }
            else if (answers.operator == "Multipliction") {
                console.log(`${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}`);
            }
            else if (answers.operator == "Subtraction") {
                console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
            }
            else if (answers.operator == "Division") {
                console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
            }
            else if (answers.operator == "Exponention") {
                console.log(`${answers.num1} xx ${answers.num2} = ${answers.num1 ** answers.num2}`);
            }
            async function startagain() {
                var again = await inquirer
                    .prompt([{
                        type: "input",
                        name: "restart",
                        message: "do u wanna restart the calculator (yes or no)"
                    }]);
                if (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "Yes") {
                    askquestion();
                }
                else {
                    console.log(chalk.greenBright `Thank you for Calculation`);
                }
            }
            startagain();
        });
    }, 2000);
}
askquestion();
