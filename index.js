// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide instructions on how to install your project.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples of use.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select desired license.',
    choices: ['MIT', 'ISC', 'MPL', 'GPL', 'none']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Provide your Github username.'
  },
  {
    type: 'input',
    name: 'name',
    message: 'State your full name.'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide your email address.'
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Provide any contributors.',
    default: " ",
  },
]

inquirer
  .prompt(questions)
  .then((response) => {
    const markDown = generate.generateMarkdown(response);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName + ".md", data, (err) => {
    err ? console.error("There seems to be an error:" + err) : console.log('Success');
  })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
