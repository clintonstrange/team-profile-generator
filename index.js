const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let team = [];

function createTeamManager() {
  return inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "What is the Manager's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "ID",
        message: "What is the Manager's ID Number? (Required)",
        validate: (numberID) => {
          if (numberID) {
            return true;
          } else {
            console.log("Please enter the Manager's ID Number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your Manager's email? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the Manager's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's Office Number? (Required)",
        validate: (offNum) => {
          if (offNum) {
            return true;
          } else {
            console.log("Please enter the Manager's Office Number!");
            return false;
          }
        },
      },
    ])
    .then(( data ) => {
      console.log(data);
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const officeNumber = data.officeNumber;
      const manager = new Manager(name, id, email, officeNumber);
      console.log(manager);
      team.push(manager);
      console.log(team);
      addEmployee();
    });
};

function addEmployee() {
  return inquirer.prompt({
    type: "confirm",
    name: "newEmployee",
    message: "Would you like to add a new Employee to the team?",
    default: true,
  }
  
  )
}

createTeamManager();
