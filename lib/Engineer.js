const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name = "") {
    super(name);

    this.github = "test-github-username"
  }

getGithub () {
    return {
        github: this.github
    }
}

  getRole() {
    return {
      role: "Engineer",
    };
  }
}

module.exports = Engineer;
