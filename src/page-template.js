const generateEmployee = (teamData) => {
  return `
    <div class="row justify-content-around">
                    <div class="card bg-dark col-4 m-1">
                        <div class="card-body">
                            <h2 class="card-title text-danger"> ${teamData.name}</h2>
                            <h3 class="card-subtitle ${teamData.icon} text-light pb-3"> ${teamData.role}</h3>
                            <ul class="bg-light py-2 rounded">
                                <li class="card-text"> Employee ID: ${teamData.id}</li>
                                <li>Email:
                                    <a href="mailto:${teamData.email}" class="card-link">${teamData.email}</a>
                                </li>
                                <li class="card-text">Office #: ${teamData.officeNumber}</li>
                                <li>Github:
                                    <a href="https://github.com/${teamData.github}" target="blank" class="card-link">${teamData.github}</a>
                                </li>
                                <li class="card-text">School: ${teamData.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
    `;
};

module.exports = (teamData) => {
  console.log(teamData);
  console.log("  --------  Building Your Team  --------  ");
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
                ${generateEmployee(teamData)}
            </main>
        </body>
    </html>
  `;
};
