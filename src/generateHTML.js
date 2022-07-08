function getEmployess(data) {
    let numberOfEmployess = data.length
    let employeeInfoHTML = "";
    for (i = 0; i < numberOfEmployess; i++) {
        switch (data[i].getRole()) {
            case "Intern":
                let oneIntern = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${data[i].getName()}</h5>
          <p class="card-text">${data[i].getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${data[i].getId()}</li>
          <li class="list-group-item"><a href="mailto: ${data[i].getEmail()}" class="card-link"> ${data[i].getEmail()}</a></li>
          <li class="list-group-item">${data[i].getSchool()}</li>
        </ul>
      </div>`
                employeeInfoHTML = employeeInfoHTML + oneIntern;
                break;
            case "Engineer":
                let oneEngineer = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${data[i].getName()}</h5>
          <p class="card-text">${data[i].getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${data[i].getId()}</li>
          <li class="list-group-item"><a href="mailto:${data[i].getEmail()} " class="card-link"> ${data[i].getEmail()}</a></li>
          <li class="list-group-item"><a href="https://github.com/${data[i].getGithub()} " class="card-link">${data[i].getGithub()}</a></li>
        </ul>
      </div>`
                employeeInfoHTML = employeeInfoHTML + oneEngineer;
                break;
            case "Manager":
                let oneManager = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${data[i].getName()}</h5>
          <p class="card-text">${data[i].getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${data[i].getId()}</li>
          <li class="list-group-item"><a href="mailto:${data[i].getEmail()}" class="card-link"> ${data[i].getEmail()}</a></li>
          <li class="list-group-item">${data[i].getOfficeNumber()}</li>
        </ul>
      </div>`
                employeeInfoHTML = employeeInfoHTML + oneManager;
                break;
        }

    }
    return employeeInfoHTML;
}



function generateHTML(data) {
    const employeeInfoHTML = getEmployess(data)
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
<nav class="navbar bg-light d-flex justify-content-center mb-2">
    <div>
      <span class="navbar-brand mb-1 h1 ">My Team</span>
    </div>
  </nav>
<div class="d-flex justify-content-around flex-wrap">
    ${employeeInfoHTML}
</div>
</body>
</html>
    `
}

module.exports = generateHTML; 