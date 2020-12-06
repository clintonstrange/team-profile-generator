const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name = "") {
    super(name);

    this.officeNumber = 33
  }

  getRole() {
    return {
      role: "Manager",
    };
  }
}

module.exports = Manager;
