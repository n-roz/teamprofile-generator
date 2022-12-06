const Engineer = require('../lib/Engineer')

test('creates an Engineer object', () => {
    const eng = new Engineer ('One', '1', 'one@yahoo.com', 'OneGitHub');
    expect(eng.name).toBe('One');
    expect(eng.id).toBe('1');
    expect(eng.email).toBe('one@yahoo.com');
    expect(eng.github).toBe('OneGitHub');
});

test("gets github username", () => {
    const eng = new Engineer('One', '1', 'one@yahoo.com', 'OneGitHub');
    expect(eng.getGithub()).toBe('OneGitHub');
});

test("gets engineer's role", () => {
    const eng = new Engineer('One', '1', 'one@yahoo.com', 'OneGitHub');
    expect(eng.getRole()).toBe('Engineer');
});