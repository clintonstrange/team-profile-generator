const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamArr = [];
let htmlArr = [];

function writeFile() {
  fs.writeFileSync(`./dist/team.html`, htmlArr.join(""), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("The Team Profile Was Generated!");
    }
  });
}

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
      console.log(manager);
      teamArr.push(manager);
      console.log(teamArr);
      addEmployee();
    });
}

function addEmployee() {
  return inquirer
    .prompt({
      type: "list",
      name: "addOrCreate",
      message: "Please select what you would like to do next.",
      choices: [
        { name: "Add an Engineer to the team", value: 1 },
        { name: "Add an Intern to the team", value: 2 },
        { name: "Build finished team.", value: 3 },
      ],
      default: 3,
    })
    .then((data) => {
      // console.log(data.addOrCreate);
      switch (data.addOrCreate) {
        case 1:
          addEngineer();
          break;
        case 2:
          addIntern();
          break;
        case 3:
          buildTeam();
          break;
      }
    });
}

function addEngineer() {
  console.log("Adding Engineer");
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
      console.log(data);
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const github = data.github;
      const engineer = new Engineer(name, id, email, github);
      console.log(engineer);
      teamArr.push(engineer);
      console.log(teamArr);
      addEmployee();
    });
}

function addIntern() {
  console.log("Adding Intern");
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
      console.log(data);
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const school = data.school;
      const intern = new Intern(name, id, email, school);
      console.log(intern);
      teamArr.push(intern);
      console.log(teamArr);
      addEmployee();
    });
}

function buildTeam() {
  console.log("  --------  Building Your Team  --------  ");
  // generateTeam(data);

  const htmlBeg = `
  <!DOCTYPE html>
      <html lang="en">
  
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Dark Side</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>
  
      <body>
        <header>
            <h1>Team Dark Side</h1>
        </header>
        <main class="card-container">
  `;
  htmlArr.push(htmlBeg);

  for (let i = 0; i < teamArr.length; i++) {
    let employeeCard = `
      <div class="employee-card">
        <div class="card-header">
          <h2>${teamArr[i].name}</h2>
          <h3>${teamArr[i].role}</h3>
        </div>
        <div>
          <ul>
          <li> Employee ID: ${teamArr[i].id}</li>
          <li> Email: 
            <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a>
          </li>
    `;
    if (teamArr[i].officeNumber) {
      employeeCard += `
        <li>Office #: ${teamArr[i].officeNumber}</li>
      `;
    }
    if (teamArr[i].github) {
      employeeCard += `
        <li>Github: 
          <a href="https://github.com/${teamArr[i].github}" target="blank">${teamArr[i].github}</a>
        </li>
      `;
    }
    if (teamArr[i].school) {
      employeeCard += `
      <li>School: ${teamArr[i].school}</li>
      `;
    }

    employeeCard += `
      </ul>
    </div>
    </div>
  `;

    htmlArr.push(employeeCard);
  }

  const htmlEnd = `
        </main>
      </body>
    </html>
  `;
  htmlArr.push(htmlEnd);

  const finalHTMLArr = htmlArr;
  writeFile(finalHTMLArr);
}

createTeamManager();
