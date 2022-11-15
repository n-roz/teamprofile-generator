const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const emp = new Employee ('One', '1', 'one@yahoo.com');
    expect(emp.name).toBe('One');
    expect(emp.id).toBe('1');
    expect(emp.email).toBe('one@yahoo.com');
});