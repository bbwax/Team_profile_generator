const Engineer = require('../lib/Engineer'); 

describe('Engineer', () => {
  let engineer;
  
  beforeEach(() => {
    engineer = new Engineer('John', 123, 'john@example.com', 'john');
  });
  
  test('can get role', () => {
    expect(engineer.getRole()).toBe('Engineer');
  });

  test('can get name', () => {
    expect(engineer.getName()).toBe('John');
  });

  test('can get id', () => {
    expect(engineer.getId()).toBe(123);
  });

  test('can get email', () => {
    expect(engineer.getEmail()).toBe('john@example.com');
  });
  
  test('can get github', () => {
    expect(engineer.getGithub()).toBe('john');
  });
});