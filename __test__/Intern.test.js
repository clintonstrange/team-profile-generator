const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("set school", () => {
  const testValue = "Jedi Academy";
  const intern = new Intern("Kylo", 1, "kylo@email.com", testValue);

  expect(intern.school).toBe(testValue);
});

test("get role, Intern", () => {
  const testValue = "Intern";
  const intern = new Intern("Kylo", 1, "kylo@email.com", "Jedi Academy");

  expect(intern.getRole()).toBe(testValue);
});

test("gets school name for intern", () => {
  const testValue = "Jedi Academy";
  const intern = new Intern("Kylo", 1, "kylo@email.com", testValue);

  expect(intern.getSchool()).toBe(testValue);
});
