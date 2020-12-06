const Engineer = require("../lib/Engineer");

test("checks if engineer is created", () => {
  const engineer = new Engineer("Kylo");

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets github username for engineer", () => {
  const engineer = new Engineer("Kylo");

  expect(engineer.getGithub()).toHaveProperty("github");
});
