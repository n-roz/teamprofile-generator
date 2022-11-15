// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const generateHTML = require('./src/page-template');
const { writeFile, copyFile } = require('./src/generate-site');

// managers, interns, engineers
const objEmployees = [];
let finished = false;

const main = async () => {
    await promptManager();

    while(!finished) {
        const {choice} = await promptMain();
        if (choice === 'Finish and generate team profile page') {
            finished = true;
        }
        else if (choice === 'Add an engineer') {
            await promptEngineer();
        }
        else if (choice === 'Add an intern') {
            await promptIntern();
        }
    }

const html = generateHTML(objEmployees);

writeFile(html).then(msg => console.log(msg));
copyFile().then(msg => console.log(msg));
}

const promptMain = async () => {
    return inquirer.prompt([
     {
         type: 'list',
         name: 'choice',
         message: 'What would you like to do?',
         choices: ['Add an engineer', 'Add an intern', 'Finish and generate a team profile page'],
     }
     ])
}

const promptManager = async () => {
    const managerResults = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the team managers name!');
                    return false;
                }
            }
        },
    ])}