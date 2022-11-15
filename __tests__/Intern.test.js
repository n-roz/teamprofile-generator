// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'
// In addition to Employee's properties and methods, Intern will also have:
// school
// getSchool()
// getRole() // Overridden to return 'Intern'

const Intern = require('../lib/Intern')

test('creates an Intern object', () => {
    const emp = new Engineer ('One', '1', 'one@yahoo.com', 'UNC Charlotte');
    expect(emp.name).toBe('One');
    expect(emp.id).toBe('1');
    expect(emp.email).toBe('one@yahoo.com');
    expect(emp.school).toBe('UNC Charlotte');
});

test("gets school name", () => {
    const intern = new Intern('One', '1', 'one@yahoo.com', 'UNC Charlotte');
    expect(intern.getSchool()).toBe('UNC Charlotte');
});

test("gets intern's role", () => {
    const intern = new Intern('One', '1', 'one@yahoo.com', 'UNC Charlotte');
    expect(intern.getRole()).toBe('Intern');
});