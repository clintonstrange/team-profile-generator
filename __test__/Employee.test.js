const Employee = require("../lib/Employee.js");

test("can Instantiate Employee instance", () => {
  const employee = new Employee();

  expect(typeof employee).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Kylo";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 999;
  const employee = new Employee("Foo", testValue);
  expect(employee.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "kylo@email.com";
  const employee = new Employee("Sith", 1, testValue);
  expect(employee.email).toBe(testValue);
});

test("get employee name", () => {
  const testValue = "Kylo";
  const employee = new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test("get employee id", () => {
  const testValue = 999;
  const employee = new Employee("Sith", testValue);

  expect(employee.getId()).toBe(testValue);
});

test("get employee email", () => {
  const testValue = "kylo@email.com";
  const employee = new Employee("Kylo", 1, testValue);

  expect(employee.getEmail()).toBe(testValue);
});
