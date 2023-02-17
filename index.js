const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your Github project url?',
        name: 'url'
    },
    {
        type: 'input',
        message: 'What is the projects title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Provide a step-by-step process of programmes needed to be installed',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Explain how to use this program',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Did you collaborate with anyone for this project?',
        name: 'contributer'
    },
    {
        type: 'input',
        message: 'What command is used to test a run?',
        name: 'test'
    },
    {
        // choices to help with selecting license badge 
        type: 'list',
        message: 'Which license do you want to apply?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL v3', 'BSD 3','None']
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    // inquirer
    // .prompt(questions)
    // .then(data) =>

}

// function call to initialize program
init();
