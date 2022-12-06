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

        if (choice === 'Finish and generate a team profile page') {
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
                    console.log('Please enter the team managers name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team managers employee ID?',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the team managers employee ID');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email address?',
            validate: input => {
                let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(res.test(input)){
                    return true;
                }else{
                    console.log('Please enter a valid email address');
                    return false;
            }   }
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is the team managers office number?',
            validate: input => {
                let res = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
                if(res.test(input)){
                    return true;
                } else {
                    console.log('Please enter the team managers office number');
                    return false;
                }
            } 
        }
    ])

    const {name, id, email, number} = managerResults;
    const manager = new Manager (name, id, email, number);
    objEmployees.push(manager);
}

const promptEngineer = async () => {
    const engineerResults = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter the engineers name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineers employee ID?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the engineers employee ID');
            return false;
          }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineers email address?',
        validate: input => {
            let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(res.test(input)){
                return true;
            }else{
                console.log('Please enter a valid email address');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineers GitHub username?',
        validate: input => {
            if(input){
                return true;
            }else{
                console.log('Please enter a valid GitHub username');
                return false;
            }
        } 
    }
    ])

    const {name, id, email, github} = engineerResults;
    const engineer = new Engineer(name, id, email, github);
    objEmployees.push(engineer);
}

const promptIntern = async () => {
    const internResults = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the interns name?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter the interns name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the interns employee ID?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the interns employee ID');
            return false;
          }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns email address?',
        validate: input => {
            let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(res.test(input)){
                return true;
            }else{
                console.log('Please enter a valid email address');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the interns school name?',
        validate: input => {
            if(input){
                return true;
            }else{
                console.log('Please enter a valid school name');
                return false;
            }
        } 
    }
    ])

    const {name, id, email, school} = internResults;
    const intern = new Intern(name, id, email, school);
    objEmployees.push(intern);
}

main();

