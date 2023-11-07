#!/usr/bin/env node

import inquirer from "inquirer";

let score: number = 0;

async function startloop() {
    let again;
    do {
        await guessNumber();
        again = await inquirer.prompt([
            {
                name: "restart",
                type: "list",
                choices: ["yes", "No"],
                message: "Do you want to continue. ",

            }
        ])
    } while (again.restart === "yes");
}

startloop();

async function guessNumber() {
    let guessNum = Math.floor(Math.random() * 10);
    let tip;
    if (guessNum % 2 == 0) {
        tip = "Tip;: The number is even."
    } else {
        tip="Tip: The number is odd."
    }
    const answer = await inquirer.prompt([
        {
        type: "number",
        name: "userGuess",
        message: `Please guess the number between 1 to 10 (${tip})`,
        
        }
    ])
    console.log(`Your guess ${answer.userGuess} and system generated ${guessNum}`)
    if (answer.userGuess === guessNum) {
        score++;
        console.log(`Congratulations your number is correct. Your score is: ${score}.`)
    } else {
        console.log(`wrong guess number. Your score is ${score} Better try next time.`);
    }
}
