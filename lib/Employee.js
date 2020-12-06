class Employee {
  constructor(name = "") {
    this.name = name;
    this.id = 7;
    this.email = "clint@email.com";
  }

  getName() {
    return {
      name: this.name,
    };
  }

  getId() {
    return {
      id: this.id,
    };
  }

  getEmail() {
    return {
      email: this.email,
    };
  }

  getRole() {
      return {
          role: "Employee"
      }
  }
}

module.exports = Employee;
