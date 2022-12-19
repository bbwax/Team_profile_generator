const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require('fs');
const employees = []


function done(){
    const header = `<head><head/>`;
    let doc = `${header}`
    for(let i = 0; i < employees.length; i++){
        const employee = employees[i];
        const employeeHtml = employee.getHtml();
        doc = doc.concat(employeeHtml);
    }
    fs.writeFileSync("./dist/index.html",doc);
}

async function init() {
    const res = await inquirer.prompt([
        //ask questions about what type of employee
        {
            type: "list",
            name: "role",
            message: "What is your role??",
            choices: ["intern", "manager", "engineer", "done"]
        },
    ])

    //if enginner ask these else ask 
    if (res.role == "engineer") {
        engineerQuestions()
    } else if (res.role == "intern") {
        internQuestions()
    } else if (res.role == "manager") {
        managerQuestions()
    } else if (res.role == "done") {
        //make a function to generate html from responses.
        done()
    }
}





//make prompt functions for engineer questions ect
async function engineerQuestions() {
    const res = await inquirer.prompt([
        //ask questions about engineer
        {
            type: "input",
            name: "name",
            message: "What is your name??"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id??"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email??"
        },
        {
            type: "input",
            name: "github",
            message: "What is your github??"
        }
    ]);
    //if enginner ask these else ask 
    const engineer = new Engineer(res.name, res.id, res.email, res.github);
    console.log(engineer);
    employees.push(engineer);
    console.log(employees);
    init();
    console.log("init has finished")



}

function managerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name??"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id??"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email??"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number??"
        }
    ]).then((res) => {
        const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        console.log(manager);
        employees.push(manager);
        console.log(manager);
        init();

    })
}
function internQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name??"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id??"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email??"
        },
        {
            type: "input",
            name: "school",
            message: "What is the name of your school??"
        }
    ]).then((res) => {
        const intern = new Intern(res.name, res.id, res.email, res.school);
        console.log(intern);
        employees.push(intern);
        console.log(intern);
        init();

    })
}
init();