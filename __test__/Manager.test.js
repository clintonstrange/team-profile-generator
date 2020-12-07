const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("checks if manager is created", () => {
    const testValue = 999;
    const manager = new Manager("Kylo", 1, "kylo@email.com", testValue);

    expect(manager.officeNumber).toBe(testValue);
});

test("get role, Manager", () => {
    const testValue = "Manager";
    const manager = new Manager("Foo", 1, "test@test.com", 100);
    expect(manager.getRole()).toBe(testValue);
  });