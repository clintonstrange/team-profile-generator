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

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
      }
      resolve({
        ok: true,
        message: "File copied!",
      });
    });
  });
};

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
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const officeNumber = data.officeNumber;
      const manager = new Manager(name, id, email, officeNumber);
      teamArr.push(manager);
      addEmployee();
    });
}

function addEmployee() {
  return inquirer
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
      teamArr.push(engineer);
      addEmployee();
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
      teamArr.push(intern);
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
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&family=Roboto:wght@500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
      </head>

      <body>
        <header class="bg-dark py-3">
            <h1 class="text-danger text-center">Team Dark Side</h1>
        </header>
        <main class="container">
        <div class="row justify-content-around">
  `;
  htmlArr.push(htmlBeg);

  for (let i = 0; i < teamArr.length; i++) {
    let employeeCard = `
      <div class="card bg-dark col-4 m-1">
        <div class="card-body">
          <h2 class="card-title text-danger">${teamArr[i].name}</h2>
          <h3 class="card-subtitle ${teamArr[i].icon} text-light pb-3"> ${teamArr[i].role}</h3>
          <ul class="bg-light py-2 rounded">
          <li class="card-text"> Employee ID: ${teamArr[i].id}</li>
          <li> Email:
            <a href="mailto:${teamArr[i].email}" class="card-link">${teamArr[i].email}</a>
          </li>
    `;
    if (teamArr[i].officeNumber) {
      employeeCard += `
        <li class="card-text">Office #: ${teamArr[i].officeNumber}</li>
      `;
    }
    if (teamArr[i].github) {
      employeeCard += `
        <li>Github:
          <a href="https://github.com/${teamArr[i].github}" target="blank" class="card-link">${teamArr[i].github}</a>
        </li>
      `;
    }
    if (teamArr[i].school) {
      employeeCard += `
      <li class="card-text">School: ${teamArr[i].school}</li>
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
  </div>
  </main>
      </body>
    </html>
  `;
  htmlArr.push(htmlEnd);

  const finalHTMLArr = htmlArr;
  writeFile(finalHTMLArr);
  copyFile();
}

createTeamManager();
