const Intern = require('../lib/Intern')

test('creates an Intern object', () => {
    const intern = new Intern ('One', '1', 'one@yahoo.com', 'UNC Charlotte');
    expect(intern.name).toBe('One');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('one@yahoo.com');
    expect(intern.school).toBe('UNC Charlotte');
});

test("gets school name", () => {
    const intern = new Intern('One', '1', 'one@yahoo.com', 'UNC Charlotte');
    expect(intern.getSchool()).toBe('UNC Charlotte');
});

test("gets intern's role", () => {
    const intern = new Intern('One', '1', 'one@yahoo.com', 'UNC Charlotte');
    expect(intern.getRole()).toBe('Intern');
});