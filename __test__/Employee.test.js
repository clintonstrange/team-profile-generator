const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("checks if employee is created", () => {
  const employee = new Employee("Kylo");

  expect(employee.name).toBe("Kylo");
  expect(employee.name.length).toBeGreaterThan(0);
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toContain("@");
});

test("get employee name", () => {
  const employee = new Employee("Kylo");

  expect(employee.getName()).toHaveProperty("name");
});

test("get employee id", () => {
  const employee = new Employee("Kylo");

  expect(employee.getId()).toHaveProperty("id");
});

test("get employee email", () => {
    const employee = new Employee("Kylo");
  
    expect(employee.getEmail()).toHaveProperty("email");
  });
