

const buildTeam = () => {
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
          <header class="bg-dark">
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

  module.exports = {buildTeam}