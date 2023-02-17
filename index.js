// fs is a Node standard library package for reading and writing files
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please provide a username');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide an email address');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your Github project url?',
        name: 'url',
        // validates that there is an input if not, then tells the user to input one 
        validate: urlInput => {
            if (urlInput) {
                return true;
            } else {
                console.log('Please provide a URL');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the projects title?',
        name: 'title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please provide your projects title');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
        validate: descriptInput => {
            if (descriptInput) {
                return true;
            } else {
                console.log('Please provide some description about your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Provide a step-by-step process of programmes needed to be installed',
        name: 'installation',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('If there are no steps, please enter N/A');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Explain how to use this program',
        name: 'usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter info how to use this program');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Did you collaborate with anyone for this project?',
        name: 'contributer'
        validate: creditInput => {
            if (creditInput) {
                return true;
            } else {
                console.log('If you have no collaborators, enter N/A');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What command is used to test a run?',
        name: 'test',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('If you have no commands, enter N/A');
                return false;
            }
        }
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
// Return the contents of 'fileName' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
    fs.writeFile(fileName, data, function(err))
}

// function to initialize program
function init() {
    inquirer
    // Goes through each of the questions 
    .prompt(questions)
    .then((data) => {
        // successfully prints out the data
        console.log(data)
        // Assigned the generateMarkDown with the data pulled from the answers
        var fileName = generateMarkdown(data)
        writeToFile(fileName)
    })

}

// function call to initialize program
init();
