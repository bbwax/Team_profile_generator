const Manager = require('../lib/Manager'); 

describe('Manager', () => {
  let manager;
  
  beforeEach(() => {
    manager = new Manager('John', 123, 'john@example.com', '1234567890');
  });
  
  test('can get role', () => {
    expect(manager.getRole()).toBe('Manager');
  });

  test('can get name', () => {
    expect(manager.getName()).toBe('John');
  });

  test('can get id', () => {
    expect(manager.getId()).toBe(123);
  });

  test('can get email', () => {
    expect(manager.getEmail()).toBe('john@example.com');
  });
  
  test('can get officeNumber', () => {
    expect(manager.getOfficeNumber()).toBe('1234567890');
  });
});