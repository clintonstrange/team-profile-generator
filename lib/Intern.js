const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name = "") {
    super(name);

    this.school = "First Order Academy"
  }

  getSchool() {
      return {
          school: this.school
      }
  }


  getRole() {
    return {
      role: "Intern",
    };
  }
}

module.exports = Intern;
