// The first class is an managerloyee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'managerloyee'
// In addition to managerloyee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'

const Manager = require('../lib/Manager')

test('creates a Manager object', () => {
    const manager = new Engineer ('One', '1', 'one@yahoo.com', '7043334444');
    expect(manager.name).toBe('One');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('one@yahoo.com');
    expect(manager.officeNumber).toBe('7043334444');
});

test("gets manager's role", () => {
    const manager = new Manager('One', '1', 'one@yahoo.com', 'UNC Charlotte');
    expect(manager.getRole()).toBe('Manager');
});