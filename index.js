// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'what is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is your project description'
  },
  {
    type: 'list',
    name: 'license',
    message: 'license',
    choices:["MIT","ISC","APACHE2.0","GPL","None"]
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What is your project installation requirements?'
  },
  {
    type: 'input',
    name: 'testing',
    message: 'what is your testing requirements?'
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Enter contributors name.'
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'Enter Github username.'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email.'
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers)
      // var markdown = generateMarkdown(answers)
      // console.log(markdown)

    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error)
        process.exit(0)
      } else {
        throw error
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();