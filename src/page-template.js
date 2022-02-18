const generateEmployee = (teamData) => {
  // console.log(teamData);
  let employeeCard = "";
  for (let i = 0; i < teamData.length; i++) {
    employeeCard += `
                    <div class="card bg-dark col-4 m-1">
                        <div class="card-body">
                            <h2 class="card-title text-danger">${teamData[i].name}</h2>
                            <h3 class="card-subtitle ${teamData[i].icon} text-light pb-3"> ${teamData[i].role}</h3>
                            <ul class="bg-light py-2 rounded">
                                <li class="card-text"> Employee ID: ${teamData[i].id}</li>
                                <li>Email:
                                    <a href="mailto:${teamData[i].email} class="card-link">${teamData[i].email}</a>
                                </li>
                                `;
    if (teamData[i].officeNumber) {
      employeeCard += `
                                      <li>Office #: ${teamData[i].officeNumber}</li>
                                    `;
    }
    if (teamData[i].github) {
      employeeCard += `
                                      <li>Github: 
                                        <a href="https://github.com/${teamData[i].github}" target="blank">${teamData[i].github}</a>
                                      </li>
                                    `;
    }
    if (teamData[i].school) {
      employeeCard += `
                                    <li>School: ${teamData[i].school}</li>
                                    `;
    }

    employeeCard += `
                            </ul>
                        </div>
                    </div>
    `;
  }
  return employeeCard;
};

module.exports = (teamData) => {
  console.log("\n==================\n");
  console.log("Building Your Team");
  console.log("\n==================\n");
  return `
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
                ${generateEmployee(teamData)}
                </div>
            </main>
        </body>
    </html>
  `;
};
