const Manager = require('../lib/Manager')

test('creates a Manager object', () => {
    const manager = new Manager ('One', '1', 'one@yahoo.com', '1234567890');
    expect(manager.name).toBe('One');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('one@yahoo.com');
    expect(manager.officeNumber).toBe('1234567890');
});

test("gets manager's role", () => {
    const manager = new Manager('One', '1', 'one@yahoo.com', '1234567890');
    expect(manager.getRole()).toBe('Manager');
});