const Manager = require("../lib/Manager");

test("checks if manager is created", () => {
    const manager = new Manager("Kylo");

    expect(manager.officeNumber).toEqual(expect.any(Number));
})