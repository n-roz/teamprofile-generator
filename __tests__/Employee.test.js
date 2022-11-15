const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const emp = new Employee ('One', '1', 'one@yahoo.com');
    expect(emp.name).toBe('One');
    expect(emp.id).toBe('1');
    expect(emp.email).toBe('one@yahoo.com');
});

// name
test("gets employee's name", () => {
    const emp = new Employee('One', '1', 'one@yahoo.com');
    expect(emp.getName()).toBe('One');
});

// id
test("gets employee's id", () => {
    const emp = new Employee('One', '1', 'one@yahoo.com');
    expect(emp.getId()).toBe('1');
});

// email
test("gets employee's email", () => {
    const emp = new Employee('One', '1', 'one@yahoo.com');
    expect(emp.getEmail()).toBe('one@yahoo.com');
});

// role
test("gets employee's role", () => {
    const emp = new Employee('One', '1', 'one@yahoo.com');
    expect(emp.getRole()).toBe('Employee');
});