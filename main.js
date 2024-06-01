// Import inquirer for take input from user 
import inquirer from "inquirer";
// Impor chalk for styling
import chalk from "chalk";
// Heading
console.log(chalk.green.bold("\n\n\n\t\t----------------------------xx--Welcome to Word Counter--xx--------------------------------------\n\n\n\n\t"));
async function charCounter() {
    // Take an input from user
    let paragraph = await inquirer.prompt([{
            name: "para",
            type: "input",
            message: "Please, Insert a paragraph"
        }]);
    // assaign a variable with name length and intiliaze with 0
    let length = 0;
    // Splitting string into an  array with spaces and with the help of split() method
    // Then, use filter method to take out the strings having no spaces
    let splitString = paragraph.para.split(" ").map((char) => length += char.length);
    // assigning the filtered array length into length variable
    return length;
}
// Make a seperate function for word counter
async function wordCounter() {
    // Take an input from user
    let paragraph = await inquirer.prompt([{
            name: "para",
            type: "input",
            message: "Please, Insert a paragraph"
        }]);
    // assaign a variable with name length and intiliaze with 0
    let length = 0;
    // Splitting string into an  array with spaces and with the help of split() method
    // Then, use filter method to take out the strings having no spaces
    let splitString = paragraph.para.split(" ").filter((word) => word !== "");
    // assigning the filtered array length into length variable
    length = splitString.length;
    return length;
}
// Crontrolling loop
let condition = true;
while (condition) {
    let operation = await inquirer.prompt([{
            name: "operate",
            type: "list",
            choices: ["Word Counter", "Character Counter", "Exit"],
            message: chalk.green("Please, Select the operation")
        }]);
    if (operation.operate === "Word Counter") {
        let result = await wordCounter();
        console.log(`\n\tTotal words are: ${result}\n\t`);
    }
    else if (operation.operate === "Character Counter") {
        let result = await charCounter();
        console.log(`\n\tTotal characters are: ${result}\n\t`);
    }
    else {
        condition = false;
    }
}
