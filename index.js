// TODO: Include packages needed for this application
const generateMarkdown=require("./utils/generateMarkdown")
const fs = require("fs")

const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [{

    type: 'input', 
    message: 'What is your project title?',
    name: 'title'
},
{
    type: 'list', 
    message: 'What license will you be using?',
    name: 'license',
    choices: ["MIT", "Apache", "IBM", "No License"]
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data)
    fs.writeFile(fileName, content, err=>{
        if(err){
            console.error(err)
            return
        }
        console.log("Sucess!")
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions) 
    .then(data=>{
        writeToFile("./output/README.md", data)
    })
}

// Function call to initialize app
init();
