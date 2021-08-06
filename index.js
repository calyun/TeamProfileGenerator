const inquirer = require("inquirer")
const fs = require('fs')
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")
const Choices = require("inquirer/lib/objects/choices");
// const { finished } = require("stream");
// const { ENGINE_METHOD_RAND } = require("constants");

const employeeArr = [];

function start() {
    inquirer.prompt([
        {
            message: "What is your name?",
            name: "name"
        },
        {
            message: "What is your Id?",
            name: "id"
        },
        {
            message: "What is your email?",
            name: "email"
        },
        {
            message: "What is your office number?",
            name: "officeNumber"
        },
        
    ]).then(response => {
        const newMgr = new Manager(response.name, response.id, response.email, response.officeNumber);
        employeeArr.push(newMgr)
        console.log(employeeArr);
        menu();
    })
}


function menu(){
    inquirer.prompt([
    {
        type: "list",
        message: "Menu",
        choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
        name: "menu"
    }
    ]).then(response => {
        if (response.menu == "Add Engineer") {
            addEngineer();
        }
        if (response.menu == "Add Intern") {
            addIntern();
        }
        if (response.menu == "Finish Building Team") {
            htmlCreator(employeeArr);
        }
    })
}

function addEngineer(){
    inquirer.prompt([
        {
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            message: "What is the engineer's Id?",
            name: "id"
        },
        {
            message: "What is the engineer's email addres?",
            name: "email"
        },
        {
            message: "What is the engineer's Github username?",
            name: "githubUser"
        },
    ]).then(response => {
        const newEng = new Engineer(response.name, response.id, response.email, response.githubUser);
        employeeArr.push(newEng);
        console.log(employeeArr);
        menu();
    })
}

function addIntern(){
    inquirer.prompt([
        {
            message: "What is the intern's name?",
            name: "name"
        },
        {
            message: "What is the intern's Id?",
            name: "id"
        },
        {
            message: "What is the intern's email address?",
            name: "email"
        },
        {
            message: "What is the intern's school?",
            name: "school"
        },
    ]).then(response => {
        const newInt = new Intern(response.name, response.id, response.email, response.school);
        employeeArr.push(newInt);
        console.log(employeeArr);
        menu();
    })
}
   
function htmlCreator(array){
    let template =`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tracker Of Employees</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
</head>
<body>
<header class="bg-danger text-white" style="padding: 1.5rem; text-align: center;">
<h1>My Team</h1>
</header>
<div class="row row-cols-1 row-cols-md-3 g-4" style="padding: 1rem;">`
    for(i=0; i<array.length; i++){
        if(array[i].getRole() == "Manager"){
            template += `
            <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-primary">${array[i].name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">&#128188 Manager</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${array[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${array[i].email}">${array[i].email}</a></li>
                <li class="list-group-item">Office Number: ${array[i].officeNumber}</li>
              </ul>
            </div>
          </div>
        </div>`
        }
        if(array[i].getRole() == "Engineer"){
            template += `
            <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-success">${array[i].name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">&#128208 Engineer</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${array[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${array[i].email}">${array[i].email}</a></li>
                <li class="list-group-item">Github: <a href="github.com/${array[i].githubUser}">${array[i].githubUser}</a></li>
              </ul>
            </div>
          </div>
        </div>`
        }
        if(array[i].getRole() == "Intern"){
            template += `
            <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-warning">${array[i].name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">&#127891 Intern</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${array[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${array[i].email}">${array[i].email}</a></li>
                <li class="list-group-item">School: ${array[i].school}</li>
              </ul>
            </div>
          </div>
        </div>`
        }
    }

    template += `
    </div>    
    </body>
    </html>`

    fs.writeFileSync("./dist/index.html", template)
}
start()