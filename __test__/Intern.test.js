const Intern = require("../lib/Intern");

test("checks if intern is created", () => {
    const intern = new Intern("Kylo");

    expect(intern.school).toEqual(expect.any(String));
})

test("gets school name for intern", () => {
    const intern = new Intern("Kylo");

    expect(intern.getSchool()).toHaveProperty("school");
});