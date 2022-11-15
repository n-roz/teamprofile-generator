// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'
// In addition to Employee's properties and methods, Engineer will also have:
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, gh) {
        super (name, id, email);
        this.github = gh;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;