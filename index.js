const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

const generatePage = require("./src/page-template.js");

let teamData = [];

function writeFile(pageHTML) {
  fs.writeFileSync(`./dist/team.html`, pageHTML, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("The Team Profile Was Generated!");
    }
  });
}

const createTeamManager = () => {
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
        name: "id",
        message: "What is the Manager's ID Number? (Required)",
        validate: (id) => {
          if (id) {
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
    .then((data) => {
      console.log(data);
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const officeNumber = data.officeNumber;
      const manager = new Manager(name, id, email, officeNumber);
      teamData.push(manager);
      // console.log(teamData);
    });
};

const addEmployee = () => {
  inquirer
    .prompt({
      type: "list",
      name: "addOrCreate",
      message: "  ----  Please select what you would like to do next.",
      choices: [
        { name: "Add an Engineer to the team", value: 1 },
        { name: "Add an Intern to the team", value: 2 },
        { name: "Build finished team.", value: 3 },
      ],
      default: 3,
    })
    .then((response) => {
      // console.log(response.addOrCreate);
      switch (response.addOrCreate) {
        case 1:
          return addEngineer();
        case 2:
          return addIntern();
        case 3:
          return generatePage(teamData).then((pageHTML) => {
            writeFile(pageHTML);
          });
      }
    });
};

function addEngineer() {
  console.log("  ------  Adding Engineer  ------  ");
  return inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "What is the Engineer's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's ID Number? (Required)",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter the Engineer's ID Number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your Engineer's email? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the Engineer's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineers's GitHub Username? (Required)",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please enter the Engineers's GitHub Username!");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const github = data.github;
      const engineer = new Engineer(name, id, email, github);
      teamData.push(engineer);
      return addEmployee();
    });
}

function addIntern() {
  console.log("  ------  Adding Intern  ------  ");
  return inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "What is the Intern's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Intern's ID Number? (Required)",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter the Intern's ID Number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your Intern's email? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the Intern's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Where does the Intern go to school? (Required)",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter where the Intern goes to school!");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const school = data.school;
      const intern = new Intern(name, id, email, school);
      teamData.push(intern);
      return addEmployee();
    });
}

createTeamManager()
  .then(addEmployee)
  .catch((err) => {
    console.log(err);
  });
