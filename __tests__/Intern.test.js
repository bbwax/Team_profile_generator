const Intern = require('../lib/Intern'); 

describe('Intern', () => {
  let intern;
  
  beforeEach(() => {
    intern = new Intern('John', 123, 'john@example.com', 'school');
  });
  
  test('can get role', () => {
    expect(intern.getRole()).toBe('Intern');
  });

  test('can get name', () => {
    expect(intern.getName()).toBe('John');
  });

  test('can get id', () => {
    expect(intern.getId()).toBe(123);
  });

  test('can get email', () => {
    expect(intern.getEmail()).toBe('john@example.com');
  });
  
  test('can get school', () => {
    expect(intern.getSchool()).toBe('school');
  });
});