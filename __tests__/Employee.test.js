const Employee = require('../lib/Employee'); 

describe('Employee', () => {
  let employee;
  
  beforeEach(() => {
    employee = new Employee('John', 123, 'john@example.com', 'john');
  });
  
  test('can get role', () => {
    expect(employee.getRole()).toBe('Employee');
  });

  test('can get name', () => {
    expect(employee.getName()).toBe('John');
  });

  test('can get id', () => {
    expect(employee.getId()).toBe(123);
  });

  test('can get email', () => {
    expect(employee.getEmail()).toBe('john@example.com');
  });
  
});