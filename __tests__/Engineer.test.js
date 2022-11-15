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

const Engineer = require('../lib/Engineer')

test('creates an Engineer object', () => {
    const emp = new Engineer ('One', '1', 'one@yahoo.com', 'OneGitHub');
    expect(emp.name).toBe('One');
    expect(emp.id).toBe('1');
    expect(emp.email).toBe('one@yahoo.com');
    expect(emp.github).toBe('OneGitHub');
});

test("gets github username", () => {
    const eng = new Engineer('One', '1', 'one@yahoo.com', 'OneGitHub');
    expect(eng.getGithub()).toBe('OneGitHub');
});

test("gets engineer's role", () => {
    const eng = new Engineer('One', '1', 'one@yahoo.com', 'OneGitHub');
    expect(eng.getRole()).toBe('Engineer');
});