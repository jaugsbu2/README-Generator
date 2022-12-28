// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const filename = 'README.md'

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'Github',
    message: 'What is your Github Username?',
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'Title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Please input your project description.',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Please input the instructions to install your project.',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Please input how this project is used.',
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'Please input the contribution guidlines.',
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Please input test instructions.',
  },
  {
    type: 'list',
    name: 'License',
    message: 'Please select a license to add to your project.',
    choices: ['Apache License', 'GNU General Public License', 'MIT License', 'BSD 2-Clause Simplified License'],
  },
];


// TODO: Create a function to write README file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}


// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      const newMarkdown = generateMarkdown(data);
      writeToFile(filename, newMarkdown)
    });

}

// Function call to initialize app
init();
