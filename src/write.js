const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require ('../lib/intern');

function writeHtml(employees)  {
    const generateManager = (data) => {
        return `
        <div class="card manager-card col-4" style="width: 100px;">
        <div class="card-header" style="background-color: blue">
          <h2 class="name" style="color: white">${data.name}</h2>
          <h3 class="employeeType" style="color: white">Manager</h3>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: ${data.email}</li>
            <li class="list-group-item">Office Num: ${data.officeNum}</li>
          </ul>
        </div>
      </div>`
    }

    const generateEngineer = (data) => {
        return `
        <div class="card manager-card col-4" style="width: 100px;">
        <div class="card-header" style="background-color: blue">
          <h2 class="name" style="color: white">${data.name}</h2>
          <h3 class="employeeType" style="color: white">Engineer</h3>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: ${data.email}</li>
            <li class="list-group-item">Github: ${data.github}</li>
          </ul>
        </div>
      </div>`
    }

    const generateIntern = (data) => {
        return `
        <div class="card manager-card col-4" style="width: 100px;">
        <div class="card-header" style="background-color: blue">
          <h2 class="name" style="color: white">${data.name}</h2>
          <h3 class="employeeType" style="color: white">Intern</h3>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: ${data.email}</li>
            <li class="list-group-item">School: ${data.school}</li>
          </ul>
        </div>
      </div>`
    }

    const teamArr = [];

    for (let i=0; i<employees.length; i++) {
        const employee = employees[i];
        if (employee instanceof Manager) {
            teamArr.push(generateManager(employee));
        }
        if (employee instanceof Engineer) {
            teamArr.push(generateEngineer(employee));
        }
        if (employee instanceof Intern) {
            teamArr.push(generateIntern(employee));
        }
    }

    return `
    <!DOCTYPE html> 
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Team</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <header
          class="hero h-00 d-flex align-items-center justify-content-center"
          style="background: red; height: 200px; margin-bottom: 50px">
          <h1 class="title" style="color: white">My Team</h1>
        </header>
    
        <section class="cards container">
          <div class="row">
           ${teamArr.join("")}
          </div>
        </section>
      </body>
    </html>
    `

}

module.exports = writeHtml;