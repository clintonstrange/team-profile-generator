const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("set gitHub username", () => {
  const testValue = "gitHubName"
  const engineer = new Engineer("Kylo", 1, "kylo@email.com", testValue);
  expect(engineer.github).toBe(testValue);
});

test("get role, Engineer", () => {
  const testValue = "Engineer";
  const engineer = new Engineer("Kylo", 1, "kylo@email.com", "gitHubName");

  expect(engineer.getRole()).toBe(testValue);
});

test("get Git Hub User Name", () => {
const testValue = "gitHubName";
const engineer = new Engineer("Kylo", 1, "kylo@email.com", testValue);
expect(engineer.getGithub()).toBe(testValue);
});
